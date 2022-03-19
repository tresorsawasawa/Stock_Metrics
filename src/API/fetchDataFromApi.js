import axios from 'axios';
import { API_KEY, FMP_API_URL, FMP_CP_API_URL } from './API';

const getSymbolsFromAPI = async () => {
  const getData = await axios.get(FMP_API_URL);
  const symbolsList = [];

  for (let i = 0; i < 1200; i += 1) {
    symbolsList.push(getData.data[i]);
  }

  return symbolsList;
};

const getCompanyProfileFromAPI = async (company) => {
  const getData = await axios.get(`${FMP_CP_API_URL}${company}${API_KEY}`);
  const result = getData.data[0];

  return result;
};

export { getSymbolsFromAPI, getCompanyProfileFromAPI };
