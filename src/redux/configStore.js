import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import companySymbolsReducer from './companiesSymbols/companiesSymbols';

const reducer = combineReducers({
  companySymbolsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
