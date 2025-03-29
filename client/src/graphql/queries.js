import { gql } from '@apollo/client';

export const GET_EXAMPLES = gql`
  query GetExamples {
    examples {
      id
      title
      description
    }
  }
`;

export const GET_EXAMPLE_BY_ID = gql`
  query GetExampleById($id: ID!) {
    example(id: $id) {
      id
      title
      description
    }
  }
`;