import React from 'react';
import spinner from '../../images/spinner.gif';
import './Spinner.scss';

const Spinner = () => (
  <div className="loader-img-container d-flex justify-content-center align-item-cnter">
    <img src={spinner} alt="Loader Gif" />
  </div>
);

export default Spinner;
