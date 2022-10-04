import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Overpass, "Noto Sans JP"`,
    body: `Overpass, "Noto Sans JP"`,
  },
  colors: {
    white: {
      0: '#F5F7FB33',
      50: '#F5F7FB',
      100: '#FAFAFB',
    },
    skyBlue: {
      50: '#87CEFAcc',
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'white.50',
        color: 'cyan.500',
        letterSpacing: '0.0625rem',
      },
    },
  },
});

export default theme;
