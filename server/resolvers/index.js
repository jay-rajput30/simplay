const { PlaylistResolvers } = require("./playlistResolvers.js");
const { UserResolvers } = require("./UserResolvers.js");
const { VideoResolvers } = require("./VideoResolvers.js");
const { AccountResolvers } = require("./AccountResolvers.js");
const resolvers = [
  VideoResolvers,
  UserResolvers,
  PlaylistResolvers,
  AccountResolvers,
];

module.exports = { resolvers };
