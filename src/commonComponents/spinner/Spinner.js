import React from "react";
import './Spinner.scss';
import { CMS } from '../../cms/CMS';
const Spinner = () => {
  return (
    <div className="spinner-position">
      <div className="spinner"/>
      <p>{CMS.loading}</p>
    </div>
  );
};

export default Spinner;
