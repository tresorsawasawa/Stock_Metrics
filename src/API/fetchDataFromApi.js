import axios from 'axios';
import {
  API_KEY,
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

const getCompanyProfileFromAPI = async (company) => {
  const getData = async axios.get(`${FinancialModelingPrep_CP_API_URL}${company}${API_KEY}`);
  const result = getData.data[0];

  return result;
};
