import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const Symbol = ({ symbol }) => (
  <div className="symbol-container" data-testid={symbol.symbol}>
    <div className="symbol-link">
      <Link to={`/company/${symbol.symbol}`}>
        <BsArrowRightCircle />
      </Link>
    </div>
    <div className="symbol-info">
      <span className="symbol-symbol">{symbol.symbol}</span>
      <span className="symbol-name">{symbol.name}</span>
      <span className="symbol-price">{symbol.price}</span>
    </div>
  </div>
);

Symbol.propTypes = {
  symbol: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Symbol;
