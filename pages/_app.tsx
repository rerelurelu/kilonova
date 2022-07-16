import '@fontsource/overpass';
import '@fontsource/noto-sans-jp';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import theme from '../theme/theme';
import Header from '../components/Header';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box pt={16} h={'100vh'}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
