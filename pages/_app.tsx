import '@fontsource/overpass';
import '@fontsource/noto-sans-jp';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import theme from '../theme/theme';
import Header from '../components/molecules/Header';
import client from '../graphql/config/ApolloClientConfig';
import Footer from '../components/molecules/Footer';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Box minH={'100vh'}>
          <Header />
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
