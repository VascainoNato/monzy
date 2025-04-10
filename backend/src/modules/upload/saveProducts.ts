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
};

export default saveProductToDatabase;