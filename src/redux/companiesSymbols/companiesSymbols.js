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
