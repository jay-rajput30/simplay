const { gql } = require("apollo-server-express");

const Playlist = gql`
  type Playlist {
    id: ID!
    uid: String!
    videos: [ID]!
    name: String!
  }

  type Query {
    getAllPlaylists: [Playlist]
  }

  type Mutation {
    getPlaylist(id: ID!): Playlist
    getUserPlaylists(userId: ID!): [Playlist]
    addToPlaylist(playlistId: ID!, videoId: ID!): Playlist
    removeFromPlaylist(playlistId: ID!, videoId: ID!): Playlist
    createPlaylist(uid: ID!, name: String!, videoId: ID!): Playlist
    deletePlaylist(playlistId: ID!): Playlist
  }
`;

module.exports = { Playlist };
