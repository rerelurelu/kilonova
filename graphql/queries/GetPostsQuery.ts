import { DocumentNode, gql } from '@apollo/client';

export const GET_POSTS_QUERY: DocumentNode = gql`
  query GetPosts {
    posts(orderBy: publishedAt_DESC) {
      createdAt
      title
      slug
      id
    }
  }
`;
