import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Overpass, "Noto Sans JP"`,
    body: `Overpass, "Noto Sans JP"`,
  },
  colors: {
    white: {
      0: '#f4fbfecc',
      50: '#f4fbfe',
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'white.50',
        color: 'cyan.200',
        letterSpacing: '0.0625rem',
      },
    },
  },
});

export default theme;
