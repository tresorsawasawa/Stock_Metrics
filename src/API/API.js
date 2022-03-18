const API_KEY = '?apikey=e18c80063ebeb7591f698d6a8d948a73';
const endpoint = 'https://financialmodelingprep.com/api/v3/';
const TRADING_FEATUR_KEY = 'available-traded/list';
const PROFILE_FEATURE = 'profile/';
const FMP_API_URL = `${endpoint}${TRADING_FEATUR_KEY}${API_KEY}`;
const FMP_CP_API_URL = `${endpoint}${PROFILE_FEATURE}`;

export { API_KEY, FMP_API_URL, FMP_CP_API_URL };
