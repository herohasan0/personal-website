import React from 'react';
import Image from 'next/image';
import A from './Link';

function Logo() {
  return (
    <A href="/">
      <Image src="/logo.png" width="48" height="48"></Image>
    </A>
  );
}

export default Logo;
