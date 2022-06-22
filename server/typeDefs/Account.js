const { gql } = require("apollo-server-express");

const Account = gql`
  type UserAccount {
    uid: ID!
    likedVideos: [ID!]!
    history: [ID!]
  }

  type Video {
    id: ID!
    title: String!
    views: Int!
    likes: Int!
    link: String!
    category: String!
    thumbnail: Thumbnail!
    thumbnailImage: String!
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
    getUserLikedVideos(uid: ID!): Video
    getUserHistory(uid: ID!): UserHistory
  }

  type Mutation {
    updateUserLikedVideos(videoId: ID!): Video
    addtoUserHistory(uid: ID!, videoId: ID!): UserHistory
  }
`;

module.exports = { Account };
