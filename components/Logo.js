import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Logo.module.css';

function Logo() {
  return (
    <Link href="/">
      <a className={styles.Logo}>
        <Image src="/logo.png" width="48" height="48"></Image>
      </a>
    </Link>
  );
}

export default Logo;
