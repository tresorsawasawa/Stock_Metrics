const API_KEY = '?apikey=5f3cc5710d0dccc73af8b93c551f469a';
const endpoint = 'https://financialmodelingprep.com/api/v3/';
const TRADING_FEATUR_KEY = 'available-traded/list';
const PROFILE_FEATURE = 'profile/';
const FMP_API_URL = `${endpoint}${TRADING_FEATUR_KEY}${API_KEY}`;
const FMP_CP_API_URL = `${endpoint}${PROFILE_FEATURE}`;

export { API_KEY, FMP_API_URL, FMP_CP_API_URL };
