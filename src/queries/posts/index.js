import { gql } from "@apollo/client"

export const GET_POSTS = gql`
  {
    posts {
      id
      titulo
      conteudo
      data
    }
}
`
export const GET_POST_BY_ID = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      titulo
      conteudo
      data
    }
  }
`

export const CREATE_POST = gql`
  mutation UpdatePost(
    $titulo: String!
    $conteudo: String!
    $data: String!
  ) {
    createPost(
      post: {
        titulo: $titulo
        conteudo: $conteudo
        data: $data
      }
    ) {
      id
      titulo
      conteudo
      data
    }
  }
`
export const UPDATE_POST= gql`
  mutation UpdatePost(
    $id: String!
    $titulo: String
    $conteudo: String
    $data: String
  ) {
    updatePost(
      id: $id
      post: {
        titulo: $titulo
        conteudo: $conteudo 
        data: $data
      }
    ) {
      id
      titulo
      conteudo 
      data
    }
  }
`

export const DELETE_POST = gql`
  mutation DeletePost($id: String) {
    deletePost(id: $id) {
      id
      titulo
      conteudo
      data
    }
  }
`