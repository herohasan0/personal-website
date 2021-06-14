import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import A from './A';

import styles from './Logo.module.css';

function Logo() {
  return (
    <A href="/" className={styles.Logo}>
      <Image src="/logo.png" width="48" height="48"></Image>
    </A>
  );
}

export default Logo;
