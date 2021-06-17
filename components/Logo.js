import React from 'react';

import { Image } from '@chakra-ui/react';
import A from './Link';

function Logo() {
  return (
    <A href="/">
      <Image objectFit="cover" src="/logo.png" boxSize="36px" maxW="initial" />
    </A>
  );
}

export default Logo;
