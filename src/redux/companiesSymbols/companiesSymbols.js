import {
  getCompanyProfileFromAPI,
  getSymbolsFromAPI,
} from '../../API/fetchDataFromApi';
import {
  GET_SYMBOLS,
  SEARCH_SYMBOLS,
  GET_COMPANY,
  SHOW_LOADER,
} from './Actions';

export const getLoader = () => ({
  type: SHOW_LOADER,
});

export const getSymbols = (data) => ({
  type: GET_SYMBOLS,
  payload: data,
});

export const getCompany = (data) => ({
  type: GET_COMPANY,
  payload: data,
});

export const getFilteredSymbols = (filter) => ({
  type: SEARCH_SYMBOLS,
  payload: filter,
});

export const getSymbolsDispatcher = () => async (dispatch) => {
  const symbolsList = await getSymbolsFromAPI();
  const symbols = getSymbols(symbolsList);

  dispatch(symbols);
};

export const getCompanyDispatcher = (company) => async (dispatch) => {
  const profile = await getCompanyProfileFromAPI(company);
  dispatch(getCompany(profile));
};

const initialState = {
  loading: true,
};

const companySymbolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SYMBOLS:
      return {
        ...state,
        isSymbolsStored: true,
        symbols: action.payload,
        filteredSymbols: action.payload,
        nbResult: action.payload.length,
        loading: false,
      };

    case GET_COMPANY: {
      return {
        ...state,
        company: action.payload,
      };
    }

    case SEARCH_SYMBOLS: {
      const { symbols } = state;
      const filter = action.payload;
      const filteredSymbolsList = symbols.filter(
        (symbol) => symbol.symbol.toUpperCase().includes(filter)
      );

      return {
        ...state,
        isSymbolsStored: true,
        symbols: state.symbols,
        filteredSymbols: filteredSymbolsList,
        numberResult: filteredSymbolsList.length,
      };
    }

    default:
      return state;
  }
};

export default companySymbolsReducer;
