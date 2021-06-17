import React from 'react';

import { Center, Image, Link } from '@chakra-ui/react';

import styles from './Social.module.css';

function Social() {
  return (
    <Center h="49px" mt="170px" mb="50px" mb="200px">
      {/* Twitter */}
      <Link
        isExternal
        href="https://twitter.com/Hsn_Kahramn"
        className={styles.logo}
      >
        <Image src="/twitter.png" boxSize="32px" alt="Twitter" />
      </Link>

      {/* Github */}
      <Link
        isExternal
        href="https://github.com/kahasan"
        className={styles.logo}
      >
        <Image src="/github.png" boxSize="32px" alt="Github" />
      </Link>

      {/* Linkedin */}
      <Link
        isExternal
        href="https://www.linkedin.com/in/hasan-kahraman-790289111/"
        className={styles.logo}
      >
        <Image src="/linkedin.png" boxSize="32px" alt="Linkedin" />
      </Link>

      {/* Hackerrank */}
      <Link
        isExternal
        href="https://www.hackerrank.com/kahraman_h"
        className={styles.logo}
      >
        <Image src="/hackerrank.png" boxSize="32px" alt="Hackerrank" />
      </Link>
    </Center>
  );
}

export default Social;
