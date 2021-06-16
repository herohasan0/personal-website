import '../styles/app.css';

import Head from 'next/head';
import Header from '@comp/Header';
import Footer from '@comp/Footer';

import { ChakraProvider } from '@chakra-ui/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Hasan Kahraman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </ChakraProvider>
  );
}
