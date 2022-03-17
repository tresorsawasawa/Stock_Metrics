import axios from 'axios';
import {
  FinancialModelingPrep_API_URL,
  FinancialModelingPrep_CP_API_URL,
} from './API';

const getSymbolsFromAPI = async () => {
  const getData = await axios.get(FinancialModelingPrep_API_URL);
  const symbolsList = [];

  for (let i = 0; i < 100; i += 1) {
    symbolsList.push(getData([i]));
  }

  return symbolsList;
};
