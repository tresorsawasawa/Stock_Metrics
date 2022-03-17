const API_KEY = '5f3cc5710d0dccc73af8b93c551f469a';
const endpoint = 'https://financialmodelingprep.com/api/v3/';
const Trading_Feature_Key = 'available-traded/list?apikey=';
const Profile_Feature = 'profile/';
const FinancialModelingPrep_API_URL = `${endpoint}${Trading_Feature_Key}${API_KEY}`;
const FinancialModelingPrep_CP_API_URL = `${endpoint}${Profile_Feature}`

export { FinancialModelingPrep_API_URL, FinancialModelingPrep_CP_API_URL }
