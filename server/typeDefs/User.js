const { gql } = require("apollo-server-express");

const User = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Query {
    getAllUsers: [User]
    getUser(id: ID!): User
    login(email: String!, password: String!): AuthorizedUser
  }

  type AuthorizedUser {
    token: String!
    expiry: Int!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    signUp(user: UserInput): AuthorizedUser
  }
`;
module.exports = { User };
