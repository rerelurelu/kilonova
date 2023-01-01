import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Header from 'components/molecules/Header';
import client from 'graphql/config/ApolloClientConfig';
import Footer from 'components/molecules/Footer';
import { RecoilRoot } from 'recoil';
import 'styles/global.css';
import { Overpass, Noto_Sans_JP } from '@next/font/google';

const overpass = Overpass({
  weight: ['300', '400', '500', '700'],
});
const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
});

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <style jsx global>{`
        html {
          font-family: ${overpass.style.fontFamily}, ${notoSansJP.style.fontFamily};
        }
      `}</style>
      <ApolloProvider client={client}>
        <Header />
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
        <Footer />
      </ApolloProvider>
    </RecoilRoot>
  );
};

export default MyApp;
