import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import A from './Link';

import styles from './Social.module.css';

function Social() {
  return (
    <div className={styles.Social}>
      {/* Twitter */}
      <A href="https://twitter.com/Hsn_Kahramn" className={styles.logo}>
        <Image src="/twitter.png" width="32" height="32"></Image>
      </A>

      {/* Github */}
      <A href="https://github.com/kahasan" className={styles.logo}>
        <Image src="/github.png" width="32" height="32"></Image>
      </A>

      {/* Linkedin */}
      <A
        href="https://www.linkedin.com/in/hasan-kahraman-790289111/"
        className={styles.logo}
      >
        <Image src="/linkedin.png" width="32" height="32"></Image>
      </A>

      {/* Hackerrank */}
      <A href="https://www.hackerrank.com/kahraman_h" className={styles.logo}>
        <Image src="/hackerrank.png" width="32" height="32"></Image>
      </A>
    </div>
  );
}

export default Social;
