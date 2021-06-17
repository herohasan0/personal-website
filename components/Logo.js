import React from 'react';

import { Image, Link } from '@chakra-ui/react';

function Logo() {
  return (
    <Link href="/">
      <Image objectFit="cover" src="/logo.png" boxSize="36px" maxW="initial" />
    </Link>
  );
}

export default Logo;
