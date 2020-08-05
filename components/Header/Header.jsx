import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Header.module.scss';

const Header = (props) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.headline}>{props.title}</div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
