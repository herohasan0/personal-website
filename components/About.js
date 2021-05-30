import React from 'react';

import styles from './About.module.css';

function About({ ...props }) {
  return (
    <div className={styles.About}>
      <div className={styles.leftSide}>
        <img className={styles.img} src="/profile.jpg"></img>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>
    </div>
  );
}

export default About;
