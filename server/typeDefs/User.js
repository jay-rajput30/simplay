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
    getUser(id: ID!): User
    login(email: String!, password: String!): AuthorizedUser
  }
`;
module.exports = { User };
