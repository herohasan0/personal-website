import React from 'react';

import { Flex } from '@chakra-ui/layout';

function Layout({ children, ...props }) {
  return (
    <Flex
      flexWrap={props.wrap}
      flexDirection={props.dir}
      maxW="914px"
      ml={{ base: '18px', md: 'auto' }}
      mr={{ base: '18px', md: 'auto' }}
      alignItems={props.align}
      mt={props.mt}
    >
      {children}
    </Flex>
  );
}

export default Layout;
