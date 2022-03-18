import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { getFilteredSymbols } from '../../redux/companiesSymbols/companiesSymbols';

const SymbolSearch = () => {
  const [inputSearch, setInputSearch] = useState('');
  const dispatch = useDispatch();
  const nbResult = useSelector(
    (state) => state.companySymbolsReducer.nbResult || 0,
  );

  const handleClick = () => {
    dispatch(getFilteredSymbols(inputSearch.toUpperCase()));
  };

  return (
    <div className="filter-container d-flex flex-column justify-content-start align-items-center py-4">
      <form className="form">
        <input
          type="text"
          className="search-input p-2 fs-5"
          data-testid="inputSymbol"
          placeholder="Search Company"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="button" data-testid="seachSymbol" onClick={handleClick} className="search-btn py-2 px-2 mx-3 fs-5 text-dark">
          <span>
            <FaSearch className="search_Icon" />
            {' '}
            <span className="search-text ps-2">Search</span>
          </span>
        </button>
      </form>
      <div className="nb-result pt-3">
        <span className="pe-2 pt-5 fw-bold fs-4">{nbResult}</span>
        <span className="fs-5 ">Found</span>
      </div>
    </div>
  );
};

export default SymbolSearch;
