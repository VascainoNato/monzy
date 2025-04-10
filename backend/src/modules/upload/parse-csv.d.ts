declare module 'parse-csv' {
    const parseCSV: {
      fromFile(filePath: string): Promise<any[]>;
    };
    
    export default parseCSV;
  }