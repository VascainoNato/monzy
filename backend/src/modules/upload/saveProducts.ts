import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ProductData {
  name: string;
  expiration: string;
  conversions: Record<string, string>;
  uploadId: string;
}

const saveProductToDatabase = async (data: ProductData): Promise<void> => {
  const { name, expiration, conversions, uploadId } = data;

  console.log(`Tentando associar ao uploadId: ${uploadId}`);


  console.dir('Salvando produto no banco:', {
    name,
    expiration,
    uploadId,
    conversions
  });

  await prisma.product.create({
    data: {
      name,
      expiration: new Date(expiration), 
      price_usd: parseFloat(conversions['USD']),
      price_eur: parseFloat(conversions['EUR']),
      price_brl: parseFloat(conversions['BRL']),
      price_gbp: parseFloat(conversions['GBP']),
      price_cad: parseFloat(conversions['CAD']),
      upload: {
        connect: { id: uploadId }, 
      },
    },
  });
  console.dir(`✅ Produto ${name} salvo com sucesso!`);
};

export default saveProductToDatabase;