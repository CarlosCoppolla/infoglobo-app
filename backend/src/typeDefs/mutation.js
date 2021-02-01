const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createPost(post: PostInput): Post
    updatePost(id: String, post: PostInput): Post
    deletePost(id: String): Post
  }
  input PostInput {
    titulo: String
    conteudo: String
    data: String
  }
`;

module.exports = mutation;