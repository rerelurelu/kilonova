import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Overpass, "Noto Sans JP"`,
    body: `Overpass, "Noto Sans JP"`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'cyan.200',
      },
    },
  },
});

export default theme;
