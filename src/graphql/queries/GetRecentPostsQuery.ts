import { gql } from '@apollo/client';

export const GET_RECENT_POSTS_QUERY= gql`
  query GetRecentlyPosts {
    posts(orderBy: publishedAt_DESC, first: 3) {
      createdAt
      title
      slug
      id
    }
  }
`;
