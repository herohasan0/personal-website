import Logo from './Logo';

import DarkModeSwitch from './DarkModeSwitch';

import {
  Flex,
  UnorderedList,
  ListItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

function Navigation({ ...props }) {
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      align="center"
      mt="40px"
      // mt={{ base: '20px', md: '40px' }}
      // pl="20px"
      // pr="20px"
      h="48px"
    >
      <Logo />
      <UnorderedList
        sx={{ display: 'flex', alignItems: 'center' }}
        styleType="none"
        fontWeight="700"
        color={useColorModeValue('#27303b', 'white')}
      >
        <ListItem>
          <Link href="#about">About</Link>
        </ListItem>
        <ListItem ml={{ base: '4', md: '6' }}>
          <Link href="#projects">Projects</Link>
        </ListItem>
        <ListItem ml={{ base: '4', md: '6' }} mr={6}>
          <Link href="#contact">Contact</Link>
        </ListItem>
        <DarkModeSwitch />
      </UnorderedList>
    </Flex>
  );
}

export default Navigation;
