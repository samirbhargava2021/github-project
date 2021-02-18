import React from "react";
import "./Header.scss";
import { CMS } from '../../cms/CMS';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">{CMS.searchRepos}</h1>
    </header>
  );
};

export default Header;