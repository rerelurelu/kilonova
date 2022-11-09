import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Header from '../components/molecules/Header';
import client from '../graphql/config/ApolloClientConfig';
import Footer from '../components/molecules/Footer';
import { RecoilRoot } from 'recoil';
import '../styles/global.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
};

export default MyApp;
