import fs from 'fs';
import path from 'path';
import { Job } from 'bullmq';

interface CsvJobData {
  buffer: Buffer | { data: number[] }; 
  originalname: string;
}

const csvProcessor = {
  processCsvUpload: (job: Job<CsvJobData>): Promise<string> => {
    let buffer = job.data.buffer;
    const originalname = job.data.originalname;

    if (!Buffer.isBuffer(buffer)) {
      console.warn('⚠️ Buffer chegou como objeto, convertendo...');
      buffer = Buffer.from((buffer as any).data ?? buffer);
    }

    if (!Buffer.isBuffer(buffer)) {
      throw new Error('Arquivo enviado não é um buffer válido.');
    }

    if (typeof originalname !== 'string') {
      throw new Error('Nome do arquivo inválido.');
    }

    try {
      const filePath = csvProcessor.saveFileTemporarily(buffer, originalname);
      return Promise.resolve(filePath);
    } catch (error) {
      console.error('Erro ao processar o upload do CSV:', error);
      throw error;
    }
  },

  saveFileTemporarily: (buffer: Buffer, originalname: string): string => {
    const uploadDir = path.join(__dirname, '..', 'uploads');
  
    // Verifica e cria o diretório, se não existir
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
  
    const filePath = path.join(uploadDir, originalname);
    fs.writeFileSync(filePath, buffer);
    return filePath;
  }
};

export default csvProcessor;
