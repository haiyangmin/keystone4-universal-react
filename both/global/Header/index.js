import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SiteSearch from './containers/SiteSearch';

const Header = ({ className }) => (
<header className={`header posf w100% z3 ${className || ''}`}>
  <div className="header__container grid-container pl10 pr10 h100% posr">
    <Link className="mr10" to="/">Home</Link>
    <Link className="mr10" to="/faqs">FAQs</Link>
    <Link className="mr10" to="/contact">Contact</Link>
    <SiteSearch />
  </div>
</header>
);

Header.propTypes = {
  className : PropTypes.string,
}

export default Header;
