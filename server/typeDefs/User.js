const { gql } = require("apollo-server-express");

const User = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Query {
    getAllUsers: [User]
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    signUp(user: UserInput): User
    getUser(id: ID!): User
    login(email: String!, password: String!): User
  }
`;
module.exports = { User };
