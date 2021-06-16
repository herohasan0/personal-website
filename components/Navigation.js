import Logo from './Logo';

import DarkModeSwitch from './DarkModeSwitch';

import { Flex, UnorderedList, ListItem, Link } from '@chakra-ui/react';

function Navigation({ ...props }) {
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      align="center"
      mt="40px"
      h="48px"
    >
      <Logo />
      <UnorderedList
        sx={{ display: 'flex', alignItems: 'center' }}
        styleType="none"
      >
        <ListItem ml={6}>
          <Link>About</Link>
        </ListItem>
        <ListItem ml={6}>
          <Link>Projects</Link>
        </ListItem>
        <ListItem ml={6} mr={6}>
          <Link>Contact</Link>
        </ListItem>
        <DarkModeSwitch />
      </UnorderedList>
    </Flex>
  );
}

export default Navigation;
