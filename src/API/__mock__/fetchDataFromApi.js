const getSymbolsFromAPI = async () => [
  {
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF Trust',
    price: 419.43,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
  },
  {
    symbol: 'CMCSA',
    name: 'Comcast Corporation',
    price: 46.3,
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
  },
];

export const getCompanyProfileFromAPI = async () => [
  {
    symbol: 'SPY',
    price: 416.25,
    beta: 1.0,
    volAvg: 111819549,
    mktCap: 382026776576,
  },
];

export default getSymbolsFromAPI;
