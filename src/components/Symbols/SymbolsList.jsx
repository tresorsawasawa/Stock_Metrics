import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSymbolsDispatcher } from '../../redux/companiesSymbols/companiesSymbols';
import Symbol from './Symbol';

const SymbolsList = () => {
  const dispatch = useDispatch();

  const isSymbolsStored = useSelector(
    (state) => state.companySymbolsReducer.isSymbolsStored || false,
  );
  const symbols = useSelector(
    (state) => state.companySymbolsReducer.filteredSymbols || [],
  );

  useEffect(() => {
    if (!isSymbolsStored) {
      dispatch(getSymbolsDispatcher());
    }
  });

  return (
    <>
      <div className="companies-list-title px-3 mt-4 py-2 d-flex flex-column justify-content-start align-items-start" />
      <div className="symbols-container d-flex justify-content-center flex-wrap">
        {symbols.map((symbol) => (
          <Symbol
            key={symbol.symbol}
            symbol={symbol.symbol}
            exchange={symbol.exchange}
            exchangeShortName={symbol.exchangeShortName}
            name={symbol.name}
            price={symbol.price}
          />
        ))}
        {symbols.length === 0 && isSymbolsStored && (
          <span className="symbols-not-found pt-5 fw-bolder fs-4">
            CAN&rsquo;T FIND THAT COMPANY
          </span>
        )}
      </div>
    </>
  );
};

export default SymbolsList;
