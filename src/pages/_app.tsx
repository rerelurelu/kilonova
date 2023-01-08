import { ApolloProvider } from '@apollo/client';
import { Overpass, Noto_Sans_JP } from '@next/font/google';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import Footer from '@/components/footer';
import Header from '@/components/header';
import client from '@/graphql/config/ApolloClientConfig';
import '@/styles/global.scss';

const overpass = Overpass({
  weight: ['300', '400', '500', '700'],
  subsets: [],
});
const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['japanese'],
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
        <div className='min-h-screen'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </ApolloProvider>
    </RecoilRoot>
  );
};

export default MyApp;
