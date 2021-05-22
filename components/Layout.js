import React from 'react';
import Navigation from './Navigation';

import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
