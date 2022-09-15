import { DocumentNode, gql } from '@apollo/client';

export const GET_POST_QUERY: DocumentNode = gql`
  query GetPost($slug: String!) {
    posts(where: { slug: $slug }) {
      createdAt
      title
      isSecret
      content
    }
  }
`;
