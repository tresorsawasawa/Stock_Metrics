import companySymbolsReducer from '../../src/redux/companiesSymbols/companiesSymbols';
import {
  SEARCH_SYMBOLS,
  GET_SYMBOLS,
  GET_COMPANY,
} from '../../src/redux/companiesSymbols/Actions';

jest.mock('../../src/API/fetchDataFromApi');

describe('Symbols actions', () => {
  describe('load symbols', () => {
    it('GET_SYMBOLS', () => {
      const state = {};
      const newState = companySymbolsReducer(state, {
        type: GET_SYMBOLS,
        payload: [
          {
            symbol: 'CMCSA',
            name: 'Comcast Corporation',
            price: 46.3,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
      });

      expect(newState).toEqual({
        isSymbolsStored: true,
        loading: false,
        nbResult: 1,
        filteredSymbols: [
          {
            symbol: 'CMCSA',
            name: 'Comcast Corporation',
            price: 46.3,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
        symbols: [
          {
            symbol: 'CMCSA',
            name: 'Comcast Corporation',
            price: 46.3,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
      });
    });
  });

  describe('filter symbols', () => {
    it('SEARCH_SYMBOLS', () => {
      const state = {
        isSymbolsStored: true,
        filteredSymbols: [
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
          {
            symbol: 'KMI',
            name: 'Kinder Morgan, Inc.',
            price: 18.72,
            exchange: 'New York Stock Exchange',
            exchangeShortName: 'NYSE',
          },
          {
            symbol: 'INTC',
            name: 'Intel Corporation',
            price: 47.68,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
          {
            symbol: 'MU',
            name: 'Micron Technology, Inc.',
            price: 75.7,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
        symbols: [
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
          {
            symbol: 'KMI',
            name: 'Kinder Morgan, Inc.',
            price: 18.72,
            exchange: 'New York Stock Exchange',
            exchangeShortName: 'NYSE',
          },
          {
            symbol: 'INTC',
            name: 'Intel Corporation',
            price: 47.68,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
          {
            symbol: 'MU',
            name: 'Micron Technology, Inc.',
            price: 75.7,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
      };

      const newState = companySymbolsReducer(state, {
        type: SEARCH_SYMBOLS,
        payload: 'MU',
      });

      expect(newState).toEqual({
        isSymbolsStored: true,
        nbResult: 1,
        filteredSymbols: [
          {
            symbol: 'MU',
            name: 'Micron Technology, Inc.',
            price: 75.7,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
        symbols: [
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
          {
            symbol: 'KMI',
            name: 'Kinder Morgan, Inc.',
            price: 18.72,
            exchange: 'New York Stock Exchange',
            exchangeShortName: 'NYSE',
          },
          {
            symbol: 'INTC',
            name: 'Intel Corporation',
            price: 47.68,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
          {
            symbol: 'MU',
            name: 'Micron Technology, Inc.',
            price: 75.7,
            exchange: 'Nasdaq Global Select',
            exchangeShortName: 'NASDAQ',
          },
        ],
      });
    });
  });

  describe('load company', () => {
    it('GET_COMPANY', () => {
      const state = [];
      const newState = companySymbolsReducer(state, {
        type: GET_COMPANY,
        payload: [
          {
            symbol: 'SPY',
            price: 416.25,
            beta: 1.0,
            volAvg: 111819549,
            mktCap: 382026776576,
            lastDiv: 5.718,
            range: '383.9-479.98',
            changes: -3.17999,
            companyName: 'SPDR S&P 500 ETF Trust',
          },
        ],
      });

      expect(newState).toEqual({
        company: [
          {
            symbol: 'SPY',
            price: 416.25,
            beta: 1.0,
            volAvg: 111819549,
            mktCap: 382026776576,
            lastDiv: 5.718,
            range: '383.9-479.98',
            changes: -3.17999,
            companyName: 'SPDR S&P 500 ETF Trust',
          },
        ],
      });
    });
  });
});
