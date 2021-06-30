import React from 'react';

import { Flex, Text, Image } from '@chakra-ui/react';

import Layout from './Layout';

function About({ ...props }) {
  return (
    <Flex id="about" align="center" justifyContent="space-between">
      <Layout dir={{ base: 'column', md: 'row' }} align="center">
        <div>
          <Image
            alt="Hasan KAHRAMAN"
            objectFit="cover"
            src="/profile.jpg"
            borderRadius="30px"
            mr="30px"
            width={{ base: '9rem', md: '16rem' }}
          />
        </div>
        <div>
          <Text
            ml={{ base: '0', md: '60px' }}
            mt={{ base: '20px', md: '0' }}
            fontSize="20px"
            lineHeight={{ base: '35px', md: '40px' }}
            width={{ base: '100%', md: '400px' }}
          >
            I'm a JR front-end developer who is trying to best. I like to dive
            into new frameworks and technologies. Currently trying to better in
            React. Always design pixel-perfect! I'm passionate about taking
            pictures and travel.
          </Text>
        </div>
      </Layout>
    </Flex>
  );
}

export default About;
