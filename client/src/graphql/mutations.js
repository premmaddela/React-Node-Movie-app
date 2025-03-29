import { gql } from '@apollo/client';

export const CREATE_ITEM = gql`
  mutation CreateItem($input: ItemInput!) {
    createItem(input: $input) {
      id
      name
      description
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation UpdateItem($id: ID!, $input: ItemInput!) {
    updateItem(id: $id, input: $input) {
      id
      name
      description
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;