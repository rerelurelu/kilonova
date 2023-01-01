import Document, { Html, Head, Main, NextScript } from 'next/document';

const GOOGLE_SITE_VERIFICATION = process.env.NEXT_GOOGLE_SITE_VERIFICATION;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja" data-theme="mytheme">
        <Head>
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />
          <meta name="description" content="zoniha's blog" />
          <meta property="og:type" content="blog" />
          <meta property="og:title" content="zoniha's blog" />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/43092452/180591686-565e96d1-4e0d-4650-96c5-9fd6cad6c517.png"
          />
          <meta property="og:description" content="zonihaの個人サイトです。" />
          <meta property="og:site_name" content="zoniha's blog" />
          <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
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
