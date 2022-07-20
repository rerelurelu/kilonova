import { DocumentNode, gql } from '@apollo/client';

export const GET_POSTS_QUERY: DocumentNode = gql`
  query Posts {
    posts {
      createdAt
      title
      slug
      id
    }
  }
`;
