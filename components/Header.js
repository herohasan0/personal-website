import { Heading } from '@chakra-ui/react';

import Navigation from './Navigation';

function Header({ ...props }) {
  return (
    <header>
      <Navigation />
      <Heading color="#27303b" as="h1" size="3xl" lineHeight="base">
        Hi I’m Hasan. <br /> I’m a JR front-end developer
      </Heading>
    </header>
  );
}

export default Header;
