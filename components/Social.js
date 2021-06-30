import React from 'react';

import { Center, Image, Link } from '@chakra-ui/react';

import SiteConfig from '../site.config';

import styles from './Social.module.css';

function Social() {
  return (
    <Center h="49px" mt="170px" mb="50px" mb="200px">
      {/* Twitter */}
      <Link isExternal href={SiteConfig.social.twitter} className={styles.logo}>
        <Image src="/twitter.png" boxSize="32px" alt="Twitter" />
      </Link>

      {/* Github */}
      <Link isExternal href={SiteConfig.social.github} className={styles.logo}>
        <Image src="/github.png" boxSize="32px" alt="Github" />
      </Link>

      {/* Linkedin */}
      <Link
        isExternal
        href={SiteConfig.social.linkedin}
        className={styles.logo}
      >
        <Image src="/linkedin.png" boxSize="32px" alt="Linkedin" />
      </Link>

      {/* Hackerrank */}
      <Link
        isExternal
        href={SiteConfig.social.hackerrank}
        className={styles.logo}
      >
        <Image src="/hackerrank.png" boxSize="32px" alt="Hackerrank" />
      </Link>
    </Center>
  );
}

export default Social;
