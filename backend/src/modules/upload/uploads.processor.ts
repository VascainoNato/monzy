import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Readable } from 'stream';
import csv from 'csv-parser';
import { HttpService } from '@nestjs/axios';
import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';
import { firstValueFrom } from 'rxjs';

interface UploadJobData {
  buffer: Buffer;
  originalname: string;
}

interface ProductCSV {
  name: string;
  price: string;
  expiration: string;
}

interface ExchangeRatesResponse {
  [currency: string]: number;
}

@Processor('uploadQueue')
export class UploadsProcessor {
  private prisma: PrismaClient = new PrismaClient();
  private redis = new Redis();
  private currencies = ['usd', 'eur', 'brl', 'gbp', 'cad'];
  constructor(private readonly httpService: HttpService) {}

  @Process('process-csv')
  async handleCsvUpload(job: Job<UploadJobData>) {
    console.log('➡️ Iniciando leitura do CSV');
    const { buffer, originalname } = job.data;

    console.log('🧪 Conteúdo como texto:\n' + JSON.stringify(buffer.toString('utf8').split('\n').slice(0, 5), null, 2));
    console.log('🧪 Primeiras linhas do CSV:\n' + buffer.toString('utf8').slice(0, 300));
    console.log(`📦 Processando: ${originalname}`);

    const products: ProductCSV[] = [];

    const csvString = buffer.toString('utf8');
    const stream = Readable.from([csvString]);

    await new Promise<void>((resolve, reject) => {
      stream
        .pipe(csv({ separator: ',' })) 
        .on('data', (row) => {
          const raw = row as Record<string, string>;

          console.log('🔑 Chaves da linha:', Object.keys(raw));
          console.log('📄 Linha lida:', raw);

          const product: ProductCSV = {
            name: raw['name'] || raw['Nome'] || '',
            price: raw['price'] || raw['Preço'] || '',
            expiration: raw['expiration'] || raw['Validade'] || '',
          };

          if (product.name && product.price && product.expiration) {
            console.log('📦 Produto bruto:', product);
            products.push(product);
          } else {
            console.warn('⚠️ Produto inválido ignorado:', product);
          }
        })
        .on('end', () => resolve())
        .on('error', (err: unknown) =>
          reject(err instanceof Error ? err : new Error(String(err))),
        );
    });

    console.log(`✅ ${products.length} produtos validados.`);
    const cacheKey = 'exchange-rates-usd';
    let ratesString = await this.redis.get(cacheKey);

    if (!ratesString) {
      console.log('🌍 Buscando cotações da nova API...');

      const observable = this.httpService.get<{
        usd: ExchangeRatesResponse;
      }>(
        'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json',
      );

      const response = await firstValueFrom(observable);
      const usdRates = response.data.usd;

      ratesString = JSON.stringify(usdRates);
      await this.redis.set(cacheKey, ratesString, 'EX', 60 * 10);
      console.log('✅ Cotações armazenadas no cache Redis.');
    } else {
      console.log('♻️ Usando cotações do cache Redis.');
    }

    const parsedRates = JSON.parse(ratesString) as ExchangeRatesResponse;

    //Fake userId enquanto não temos autenticação
    const fakeUserId = '00000000-0000-0000-0000-000000000001';

    // ⬇️ Criação do Upload
    console.log('📝 Criando registro de Upload no banco...');
    const upload = await this.prisma.upload.create({
      data: {
        originalName: originalname,
        status: 'completed',
        totalProducts: products.length,
        moedasUsadas: 'USD,EUR,BRL,GBP,CAD',
        userId: fakeUserId,
      },
    });

    console.log(`✅ Upload criado com ID: ${upload.id}`);
    const uploadId = upload.id;
    console.log('📦 Salvando produtos no banco...');

    for (const [index, product] of products.entries()) {
      const priceUSD = parseFloat(
        product.price.replace(/[^\d.,]/g, '').replace(',', '.')
      );
      const priceConversions: Record<string, number> = {};

      for (const currency of this.currencies) {
        priceConversions[currency] =
          currency === 'usd'
            ? priceUSD
            : priceUSD * (parsedRates[currency] ?? 1);
      }

      await this.prisma.product.create({
        data: {
          name: product.name,
          expiration: this.parseDate(product.expiration),
          price_usd: priceConversions.usd,
          price_eur: priceConversions.eur,
          price_brl: priceConversions.brl,
          price_gbp: priceConversions.gbp,
          price_cad: priceConversions.cad,
          upload: { connect: { id: uploadId } },
        },
      });
      console.log(`✅ Produto ${index + 1}/${products.length} salvo: ${product.name}`);
    }
    console.log('🎉 Processamento finalizado e salvo no banco com sucesso!');
  }
  private parseDate(dateStr: string): Date {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const [month, day, year] = parts.map(Number);
      return new Date(year, month - 1, day);
    }
    return new Date(dateStr);
  }
}
