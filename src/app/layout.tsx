'use client';

import { ApolloProvider } from '@apollo/client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Noto_Sans_JP, Overpass } from 'next/font/google';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import '@/styles/global.scss';

import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import client from '@/features/api/graphql/config/ApolloClientConfig';

type Props = {
  children: ReactNode;
};

const overpass = Overpass({
  weight: ['400', '500', '600', '700'],
  subsets: [],
  variable: '--font-overpass',
  display: 'swap',
});
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '600', '700'],
  subsets: [],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='ja' data-theme='mytheme' className={`${overpass.variable} ${notoSansJP.variable}`}>
      <RecoilRoot>
        <body>
          <ApolloProvider client={client}>
            <Header />
            <div className='min-h-screen'>
              <div className='px-12 pb-60 pt-20'>{children}</div>
            </div>
            <Footer />
          </ApolloProvider>
        </body>
      </RecoilRoot>
    </html>
  );
};

export default RootLayout;
