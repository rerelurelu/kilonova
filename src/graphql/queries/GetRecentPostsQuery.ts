import { DocumentNode, gql } from '@apollo/client';

export const GET_RECENT_POSTS_QUERY: DocumentNode = gql`
  query GetRecentlyPosts {
    posts(orderBy: publishedAt_DESC, first: 3) {
      createdAt
      title
      slug
      id
    }
  }
`;
