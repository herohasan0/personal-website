import React from 'react';
import '../styles/app.css';

import { ChakraProvider } from '@chakra-ui/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
