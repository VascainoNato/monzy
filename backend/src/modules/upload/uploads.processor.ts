import { Job } from 'bull';
import csvProcessor from './csvProcessor';
import csvParser from './csvParser';
import currencyConverter from './currencyConverter';
import saveProductToDatabase from './saveProducts';

const processCsv = async (job: Job<{ buffer: Buffer; originalname: string; uploadId: string }>) => {
  try {
    const filePath = await csvProcessor.processCsvUpload(job);
    const parsedData = await csvParser.parseCsv(filePath);
    
    for (const item of parsedData) {
      const conversions = await currencyConverter.convertPrice(Number(item.price), 'USD');
      await saveProductToDatabase({ 
        name: item.name, 
        expiration: item.expiration, 
        conversions, 
        uploadId: job.data.uploadId 
      });
    }
  } catch (error) {
    console.error('Erro ao processar o CSV:', error);
    await job.moveToFailed({ message: error.message });
  }
};

export default processCsv;