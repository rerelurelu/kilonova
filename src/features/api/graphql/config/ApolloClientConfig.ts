import { ApolloClient, InMemoryCache } from '@apollo/client';

const isProduction = process.env.NODE_ENV === 'production';

const CONTENT_API = isProduction
  ? process.env.NEXT_PUBLIC_CONTENT_API
  : process.env.NEXT_PUBLIC_CONTENT_DEV_API;

const client = new ApolloClient({
  uri: CONTENT_API,
  cache: new InMemoryCache(),
});

export default client;
