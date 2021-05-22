import React from 'react';

import styles from './Header.module.css';

function Header({ ...props }) {
  return (
    <div className={styles.Header}>
      <h1>
        Hi I’m Hasan. <br /> I’m a JR front-end developer
      </h1>
    </div>
  );
}

export default Header;
