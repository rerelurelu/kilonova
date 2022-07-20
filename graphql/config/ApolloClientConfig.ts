import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const CONTENT_API = process.env.NEXT_PUBLIC_CONTENT_API;

export const ApolloClientConfig = new ApolloClient({
  uri: CONTENT_API,
  cache: new InMemoryCache(),
});
