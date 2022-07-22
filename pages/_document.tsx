import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />
          <meta property="og:type" content="blog" />
          <meta property="og:title" content="zoniha's blog" />
          <meta property="og:image" content="../public/og_image.png" />
          <meta property="og:description" content="zonihaの個人サイトです。" />
          <meta property="og:site_name" content="zoniha's blog" />
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
