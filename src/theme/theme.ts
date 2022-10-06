import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `Overpass, "Noto Sans JP"`,
    body: `Overpass, "Noto Sans JP"`,
  },
  colors: {
    white: {
      0: '#f5f7fb33',
      50: '#f5f7fb',
      100: '#fafafb',
    },
    skyBlue: {
      50: '#87cefacc',
    },
    black: {
      0: '#1e1f2633',
      50: '#1e1f26',
    },
    fc: {
      title: '#7da3a1',
      main: '#66a5ad',
      sub: '#4dd0e1',
    },
    fcDark: {
      title: '#4dd0e1',
      main: '#26c6da',
      sub: '#0097a7',
    },
  },
  styles: {
    light: {
      body: {
        backgroundColor: 'white.50',
        color: 'cyan.500',
        letterSpacing: '0.0625rem',
      },
    },
    dark: {
      body: {
        backgroundColor: 'black.50',
        color: 'cyan.500',
        letterSpacing: '0.0625rem',
      },
    },
  },
});

export default theme;
