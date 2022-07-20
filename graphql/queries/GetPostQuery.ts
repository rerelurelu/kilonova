import { DocumentNode, gql } from '@apollo/client';

export const GET_POST_QUERY: DocumentNode = gql`
  query Post($slug: String!) {
    posts(where: { slug: $slug }) {
      createdAt
      title
      content
    }
  }
`;
