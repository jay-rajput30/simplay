const { gql } = require("apollo-server-express");

const Account = gql`
  type UserAccount {
    uid: ID!
    likedVideos: [ID!]!
    history: [ID!]
  }

  type UserHistory {
    uid: ID!
    history: [ID]
  }

  type UserLikedVideos {
    uid: ID!
    likedVideos: [ID]
  }

  type Query {
    getUserLikedVideos(uid: ID!): UserLikedVideos
    getUserHistory(uid: ID!): UserHistory
  }

  type Mutation {
    updateUserLikedVideos(uid: ID!, videoId: ID!): UserLikedVideos
    addtoUserHistory(uid: ID!, videoId: ID!): UserHistory
  }
`;

module.exports = { Account };
