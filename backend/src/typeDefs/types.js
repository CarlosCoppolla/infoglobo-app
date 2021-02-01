const { gql } = require("apollo-server");

const types = gql`
  type Post {
    id: ID!
    titulo: String
    conteudo: String
    data: String
  }
`;

module.exports = types;