import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSymbolsDispatcher } from '../../redux/companiesSymbols/companiesSymbols';
import Symbol from './Symbol';

const SymbolsList = () => {
  const dispatch = useDispatch();

  const isSymbolsStored = useSelector(
    (state) => state.companySymbolsReducer.isSymbolsStored || false,
  );
  const symbols = useSelector((state) => state.companySymbolsReducer.filteredSymbols || []);

  useEffect(() => {});
  if (!isSymbolsStored) {
    dispatch(getSymbolsDispatcher);
  }
  return (
    <div className="symbols-container">
      {symbols.map((symbol) => (
        <Symbol key={symbol.symbol} symbol={symbol.symbol} />
      ))}
      {symbols.length === 0 && isSymbolsStored && <div className="symbols-not-found">Not found</div>}
    </div>
  );
};

export default SymbolsList;
