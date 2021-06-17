import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

import styles from './About.module.css';

import Layout from './Layout';

function About({ ...props }) {
  return (
    <Flex align="center" justifyContent="space-between">
      <Layout>
        <div>
          <img className={styles.img} src="/profile.jpg"></img>
        </div>
        <div>
          <Text fontSize="20px" lineHeight="40px" w="540px">
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
