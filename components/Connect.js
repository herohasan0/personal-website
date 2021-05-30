import React from 'react';

import styles from './Connect.module.css';

function Connect() {
  return (
    <div className={styles.Connect}>
      <div className={styles.top}>
        <h3 className={styles.title}>Let's connect</h3>
      </div>
      <div className={styles.bottom}>
        <p className={styles.desc}>
          I'm interested in chatting about design, feel free to connect with me
          on any of the social platforms below.{' '}
        </p>
      </div>
    </div>
  );
}

export default Connect;
