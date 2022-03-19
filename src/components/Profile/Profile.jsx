import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
    <div className="company-box d-flex flex-column">
      <div className="company-container ">
        <div className="company-header d-flex flex-column justify-content-start align-items-center">
          <div className="img-container d-flex align-items-center justify-content-center">
            <img
              className="profile-image px-2 my-3"
              src={company.image}
              alt="logo company"
            />
          </div>
          <div className="details d-flex justify-content-between align-items-center pb-3 px-3 flex-column">
            <span className="profile-symbol fs-3 fw-bold">{company.symbol}</span>
            <span className="profile-name ">{company.name}</span>
            <span className="profile-companyName pb-3">{company.companyName}</span>
            {company.description && (
              <span className="profile-descr px-3 text-justify text-justify">
                {company.description.substring(0, 250)}
                ...
              </span>
            )}
          </div>
        </div>
        <div className="company-body">
          {company.currency && (
            <div className="p-3 d-flex justify-content-between align-items-center">
              <span className="company-attribute fs-6">Currency</span>
              <span className="profile-currency fw-bold">{company.currency}</span>
            </div>
          )}
          {company.industry && (
            <div className="p-3 d-flex justify-content-between align-items-center">
              <span className="company-attribute fs-6">Sector</span>
              <span className="profile-currency fw-bold">{company.sector}</span>
            </div>
          )}
          {company.price && (
            <div className="p-3 d-flex justify-content-between">
              <span className="company-attribute fs-6">Price</span>
              <span className="profile-currency fw-bold">{company.price}</span>
            </div>
          )}
          {company.changes && (
            <div className="p-3 d-flex justify-content-between">
              <span className="company-attribute fs-6">Changes</span>
              <span className="profile-currency fw-bold">{company.changes}</span>
            </div>
          )}
          {company.exchangeShortName && (
            <div className="p-3 d-flex justify-content-between">
              <span className="company-attribute fs-6">ExchangeShortName</span>
              <span className="profile-currency fw-bold">
                {company.exchangeShortName}
              </span>
            </div>
          )}
          {company.country && (
            <div className="p-3 d-flex justify-content-between">
              <span className="company-attribute fs-6">Country</span>
              <span className="profile-currency fw-bold">{company.country}</span>
            </div>
          )}

          {company.ceo && (
            <div className="p-3 d-flex justify-content-between">
              <span className="company-attribute fs-6">CEO</span>
              <span className="profile-currency fw-bold">{company.ceo}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
