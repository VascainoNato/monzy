import parse from 'parse-csv';

const csvParser = {
  parseCsv: async (filePath: string): Promise<any[]> => {
    const csvData = await parse.fromFile(filePath);
    const validData = csvData.filter(row => csvParser.isValidRow(row));
    
    return validData.map(row => ({
      name: row.name,
      price: row.price,
      expiration: row.expiration
    }));
  },

  isValidRow: (row: any): boolean => {
    return row.name && row.price && row.expiration;
  }
};

export default csvParser;