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

  type Thumbnail {
    image: String!
    description: String!
  }

  type UserHistory {
    uid: ID!
    history: [Video]
  }

  type UserLikedVideos {
    uid: ID!
    likedVideos: [Video]
  }

  type Query {
    getUserLikedVideos: Video
    getUserHistory: UserHistory
  }

  type Mutation {
    updateUserLikedVideos(videoId: ID!): Video
    addtoUserHistory(videoId: ID!): UserHistory
  }
`;

module.exports = { Account };
