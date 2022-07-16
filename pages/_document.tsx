import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
