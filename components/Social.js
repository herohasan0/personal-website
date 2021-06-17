import React from 'react';
import A from './Link';

import { Center, Image } from '@chakra-ui/react';

import styles from './Social.module.css';

function Social() {
  return (
    <Center h="49px" mt="170px" mb="50px" mb="200px">
      {/* Twitter */}
      <A href="https://twitter.com/Hsn_Kahramn" className={styles.logo}>
        <Image src="/twitter.png" boxSize="32px" alt="Twitter" />
      </A>

      {/* Github */}
      <A href="https://github.com/kahasan" className={styles.logo}>
        <Image src="/github.png" boxSize="32px" alt="Github" />
      </A>

      {/* Linkedin */}
      <A
        href="https://www.linkedin.com/in/hasan-kahraman-790289111/"
        className={styles.logo}
      >
        <Image src="/linkedin.png" boxSize="32px" alt="Linkedin" />
      </A>

      {/* Hackerrank */}
      <A href="https://www.hackerrank.com/kahraman_h" className={styles.logo}>
        <Image src="/hackerrank.png" boxSize="32px" alt="Hackerrank" />
      </A>
    </Center>
  );
}

export default Social;
