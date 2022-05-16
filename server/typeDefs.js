const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Video {
    id: ID!
    title: String!
    views: Int!
    likes: Int!
    link: String!
    category: String!
  }
  type Query {
    hello: String

    getAllVideos: [Video]
  }

  input VideoInput {
    title: String!
    views: Int!
    likes: Int!
    link: String!
    category: String!
  }
  type Mutation {
    addVideo(video: VideoInput): Video
    getVideo(id: ID): Video
    deleteVideo(id: ID): Video
  }
`;

module.exports = { typeDefs };
