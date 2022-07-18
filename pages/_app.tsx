import '@fontsource/overpass';
import '@fontsource/noto-sans-jp';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import theme from '../theme/theme';
import Header from '../components/Header';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const CONTENT_API = process.env.NEXT_PUBLIC_CONTENT_API;

const client = new ApolloClient({
  uri: CONTENT_API,
  cache: new InMemoryCache(),
});

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Header />
        <Box pt={16} h={'100vh'} overflowY={'scroll'} overscrollBehaviorY={'contain'}>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
