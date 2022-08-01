import { ApolloClient, InMemoryCache } from '@apollo/client';

const CONTENT_API = process.env.NEXT_PUBLIC_CONTENT_API;

const client = new ApolloClient({
  uri: CONTENT_API,
  cache: new InMemoryCache(),
});

export default client;
