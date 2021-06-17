import React from 'react';

import { Flex, Text, Image } from '@chakra-ui/react';

import Layout from './Layout';

function About({ ...props }) {
  return (
    <Flex align="center" justifyContent="space-between">
      <Layout dir={{ base: 'column', md: 'row' }} align="center">
        <div>
          <Image
            alt="Hasan KAHRAMAN"
            objectFit="cover"
            src="/profile.jpg"
            borderRadius="30px"
            mr="30px"
            width={{ base: '9rem', md: '37rem' }}
          />
        </div>
        <div>
          <Text
            ml={{ base: '0', md: '30px' }}
            mt={{ base: '20px', md: '0' }}
            fontSize="20px"
            lineHeight="40px"
            lineHeight={{ base: '35px', md: '40px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </Text>
        </div>
      </Layout>
    </Flex>
  );
}

export default About;
