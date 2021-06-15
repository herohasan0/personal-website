import { useColorMode, IconButton, DarkMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Dark Switch"
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    />
  );
};

export default DarkModeSwitch;
