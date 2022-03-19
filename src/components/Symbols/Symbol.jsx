import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const Symbol = ({
  symbol, name, price, exchangeShortName,
}) => (
  <div className="symbol-container d-flex align-items-end flex-column">
    <div className="symbol-link p-3" data-testid={symbol}>
      <Link to={`/company/${symbol}`}>
        <BsArrowRightCircle className="right-arrow text-white fw-bolder fs-4" />
      </Link>
    </div>
    <div className="symbol-info d-flex align-items-end flex-column pe-3 pb-2 text-end">
      <span className="symbol-symbol fw-bolder fs-4">{symbol}</span>
      <span className="symbol-name">{name}</span>
      <span className="symbol-price fw-bolder fs-4 py-1">{price}</span>
      <span className="symbol-exchShot">{exchangeShortName}</span>
    </div>
  </div>
);

Symbol.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exchangeShortName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Symbol;
