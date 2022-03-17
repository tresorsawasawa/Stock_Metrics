import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import { getCompanyDispatcher } from '../../redux/companiesSymbols/companiesSymbols';

const Profile = () => {
  const dispatch = useDispatch();
  const company = useSelector(
    (state) => state.companySymbolsReducer.company || '',
  );

  const { name } = useParams();

  useEffect(() => {
    dispatch(getCompanyDispatcher(name));
  }, [company.name]);

  return (
    <div className="company-box">
      <div className="go-back">
        <Link to="/">
          <FaChevronLeft />
          <span>Back to Homepage</span>
        </Link>
      </div>
      <div className="company-container">
        <div className="company-header">
          <img
            className="profile-image"
            src={company.image}
            alt="logo company"
          />
          <div>
            <span className="profile-symbol">{company.symbol}</span>
            <span className="profile-name">{company.name}</span>
            <span className="profile-companyName">{company.companyName}</span>
            {company.description && (
              <span className="profile-description">
                {company.description.substring(0, 200)}
                ...
              </span>
            )}
          </div>
        </div>
        <div className="company-body">
          {company.currency && (
            <div>
              <span className="profile-currency">{company.currency}</span>
              <span className="company-attribute">Currency</span>
            </div>
          )}
          {company.industry && (
            <div>
              <span className="profile-currency">{company.sector}</span>
              <span className="company-attribute">Sector</span>
            </div>
          )}
          {company.price && (
            <div>
              <span className="profile-currency">{company.price}</span>
              <span className="company-attribute">Price</span>
            </div>
          )}
          {company.changes && (
            <div>
              <span className="profile-currency">{company.changes}</span>
              <span className="company-attribute">Changes</span>
            </div>
          )}
          {company.exchangeShortName && (
            <div>
              <span className="profile-currency">
                {company.exchangeShortName}
              </span>
              <span className="company-attribute">ExchangeShortName</span>
            </div>
          )}
          {company.country && (
            <div>
              <span className="profile-currency">{company.country}</span>
              <span className="company-attribute">Country</span>
            </div>
          )}
          {company.ceo && (
            <div>
              <span className="profile-currency">{company.ceo}</span>
              <span className="company-attribute">CEO</span>
            </div>
          )}
        </div>
      </div>
      <div className="go-back">
        <Link to="/">
          <FaChevronLeft />
          <span>Back To Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
