import fs from 'fs';
import csv from 'csv-parser';

const csvParser = {
  parseCsv: async (filePath: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      const results: any[] = [];

      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row: Record<string, any>) => {
          console.warn('🧾 Linha bruta do CSV:', row);
          const nameRaw = row.name || row.nome || row.Name || row.Nome;
          const priceRaw = row.price || row.preco || row.Price || row.Preço;
          const expirationRaw = row.expiration || row.validade || row.Expiration || row.Validade;

          const name = nameRaw ? String(nameRaw).trim() : '';
          const price = priceRaw ? Number(priceRaw) : NaN;
          const expiration = expirationRaw ? String(expirationRaw).trim() : '';

          if (csvParser.isValidRow({ name, price, expiration })) {
            results.push({ name, price, expiration });
          } else {
            console.warn('Linha ignorada por estar incompleta ou inválida:', row);
          }
        })
        .on('end', () => {
          console.warn('✅ CSV processado com sucesso!');
          console.dir(results);
          resolve(results);
        })
        .on('error', (err) => {
          console.error('Erro ao ler o CSV:', err);
          reject(err);
        });
    });
  },

  isValidRow: (row: { name?: string; price?: number; expiration?: string }): boolean => {
    return (
      typeof row.name === 'string' &&
      row.name.length > 0 &&
      typeof row.expiration === 'string' &&
      row.expiration.length > 0 &&
      typeof row.price === 'number' &&
      !isNaN(row.price)
    );
  }
};

export default csvParser;
