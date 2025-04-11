import axios from 'axios';

const currencyConverter = {
  convertPrice: async (price: number, baseCurrency: string): Promise<any> => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency.toLowerCase()}.json`;

    console.log(`🌍 Buscando conversões para ${price} ${baseCurrency} via ${url}`);
    
    const response = await axios.get(url);
    const rates = response.data?.[baseCurrency.toLowerCase()];

    if (!rates) {
      console.error(`❌ Não foi possível encontrar as taxas para a moeda base: ${baseCurrency}`);
      throw new Error(`Moeda base inválida ou não encontrada: ${baseCurrency}`);
    }

    const conversions: Record<string, string> = {};
    const currenciesToConvert = ['EUR', 'GBP', 'BRL', 'CAD'];

    currenciesToConvert.forEach(currency => {
      const rate = rates[currency.toLowerCase()];
      if (rate) {
        conversions[currency] = (price * rate).toFixed(2);
      } else {
        console.warn(`⚠️ Taxa de câmbio para ${currency} não encontrada.`);
        conversions[currency] = '0.00';
      }
    });

    conversions['USD'] = price.toFixed(2); 

    console.log('💱 Conversões realizadas:', conversions);

    return {
      original: price,
      ...conversions,
    };
  }
};

export default currencyConverter;
