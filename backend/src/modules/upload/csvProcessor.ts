import fs from 'fs';
import path from 'path';
import { Job } from 'bull';

const csvProcessor = {
  processCsvUpload:(job: Job<{ buffer: Buffer; originalname: string }>): Promise<string> => {
    const { buffer, originalname } = job.data;
    const filePath = csvProcessor.saveFileTemporarily(buffer, originalname);
    
    try {
      return Promise.resolve(filePath); 
    } catch (error) {
      console.error('Erro ao processar o upload do CSV:', error);
      throw error;
    } finally {
      fs.unlinkSync(filePath); 
    }
  },

  saveFileTemporarily: (buffer: Buffer, originalname: string): string => {
    const filePath = path.join(__dirname, '..', 'uploads', originalname);
    fs.writeFileSync(filePath, buffer);
    return filePath;
  }
};

export default csvProcessor;