import Document, { Html, Head, Main, NextScript } from 'next/document';

const GOOGLE_SITE_VERIFICATION = process.env.NEXT_GOOGLE_SITE_VERIFICATION;

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja' data-theme='mytheme'>
        <Head>
          <link rel='icon' type='image/svg+xml' href='favicon.svg' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='zoniha' />
          <meta property='og:image' content='https://zoniha.vercel.app/og_image.png' />
          <meta name='google-site-verification' content={GOOGLE_SITE_VERIFICATION} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
