const { gql } = require("apollo-server-express");

const Video = gql`
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
    description: String!
    thumbnailImage: String!
  }
  type Mutation {
    addVideo(video: VideoInput): Video
    getVideo(id: ID): Video
    deleteVideo(id: ID): Video
  }
`;

module.exports = { Video };
