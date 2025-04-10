import axios from 'axios';

const currencyConverter = {
  convertPrice: async (price: number, baseCurrency: string): Promise<any> => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;
    const response = await axios.get(url);
    const rates = response.data;

    // Converte o preço para 5 moedas
    const conversions = {};
    const currenciesToConvert = ['EUR', 'GBP', 'JPY', 'AUD', 'CAD'];

    currenciesToConvert.forEach(currency => {
      conversions[currency] = (price * rates[currency]).toFixed(2); 
    });

    return {
      original: price,
      ...conversions
    };
  }
};

export default currencyConverter;