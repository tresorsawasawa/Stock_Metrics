import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLoader } from '../../redux/companiesSymbols/companiesSymbols';
import SymbolsList from './SymbolsList';
import Spinner from '../Spinner/Spinner';
import SymbolSearch from './SymbolSearch';

const SymbolPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.companySymbolsReducer.loading);

  useEffect(() => {
    dispatch(getLoader());
  }, [isLoading]);

  return (
    <section>
      <SymbolSearch />
      <SymbolsList />
      {isLoading && <Spinner />}
    </section>
  );
};

export default SymbolPage;
