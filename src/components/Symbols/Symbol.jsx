import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const Symbol = ({ symbol }) => (
  <div className="symbol-container">
    <div className="symbol-link">
      <Link to={`/company/${symbol.symbol}`}>
        <BsArrowRightCircle />
      </Link>
    </div>
  </div>
);

Symbol.propTypes = {
  symbol: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Symbol;
