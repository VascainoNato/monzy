/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Job } from 'bullmq';
import fs from 'fs';
import csvProcessor from './csvProcessor';
import csvParser from './csvParser';
import currencyConverter from './currencyConverter';
import saveProductToDatabase from './saveProducts';

const processCsv = async (job: Job<{ buffer: Buffer; originalname: string; uploadId: string }>) => {
  const filePath = await csvProcessor.processCsvUpload(job); 

  try {
    const parsedData = await csvParser.parseCsv(filePath);

    for (const item of parsedData) {
      console.log('🔍 Produto a ser processado:', item);
    
      const conversions = await currencyConverter.convertPrice(Number(item.price), 'USD');
      console.log('💱 Conversões feitas:', conversions);
    
      await saveProductToDatabase({
        name: item.name,
        expiration: item.expiration,
        conversions,
        uploadId: job.data.uploadId,
      });
    }
  } catch (error) {
    console.error('Error processing CSV file:', error);
    await job.moveToFailed(new Error(error.message), error.message);
  } finally {
    try {
      fs.unlinkSync(filePath);
    } catch (e) {
      console.error('Error deleting temporary file:', e);
    }
  }
};

export default processCsv;
