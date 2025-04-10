import fs from 'fs';
import path from 'path';

interface ConversionData {
  original: number;
  conversions: Record<string, string>;
  name: string;
  expiration: string;
  id: number;
  date: string;
}

const saveConversions = (data: ConversionData): Promise<void> => {
  return new Promise((resolve) => {
    const filePath = path.join(__dirname, 'conversions.json');

    const existingData: ConversionData[] = [];
    try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(fileContent) as ConversionData[];
    existingData.push(...parsedData);
    } catch (error) {
      console.error('Erro ao ler o arquivo:', error);
    }
    existingData.push(data);
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf-8');
    resolve();
  });
};

export default saveConversions;