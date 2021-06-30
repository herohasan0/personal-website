import React from 'react';

import Layout from './Layout';

import { Heading, Text } from '@chakra-ui/layout';

function Connect() {
  return (
    <div>
      <Layout mt="140px" dir="column" align="center">
        <div>
          <Heading as="h3" fontSize="64px">
            Let's connect
          </Heading>
        </div>
        <div>
          <Text fontSize="32px" mt="40px" fontWeight="300" lineHeight="46px">
            I'm interested in chatting about code and design. Feel free to
            connect with me on any of the social platforms below.{' '}
          </Text>
        </div>
      </Layout>
    </div>
  );
}

export default Connect;
