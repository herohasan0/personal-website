import React from 'react';

import { Flex, Text, Image } from '@chakra-ui/react';

import Layout from './Layout';

function About({ ...props }) {
  return (
    <Flex align="center" justifyContent="space-between">
      <Layout align="center">
        <div>
          <Image
            alt="Hasan KAHRAMAN"
            objectFit="cover"
            boxSize="280px"
            src="/profile.jpg"
            borderRadius="30px"
            boxSize={48}
            mr="30px"
          />
        </div>
        <div>
          <Text ml="30px" fontSize="20px" lineHeight="40px" w="540px">
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
