import { Heading } from '@chakra-ui/react';

import Navigation from './Navigation';

import Layout from './Layout';

function Header({ ...props }) {
  return (
    <header>
      <Layout dir="column">
        <Navigation />
        <Heading
          mt="200px"
          h="100vh"
          color="#27303b"
          as="h1"
          size="3xl"
          lineHeight="base"
        >
          Hi I’m Hasan. <br /> I’m a JR front-end developer
        </Heading>
      </Layout>
    </header>
  );
}

export default Header;
