const { PlaylistResolvers } = require("./playlistResolvers.js");
const { UserResolvers } = require("./UserResolvers.js");
const { VideoResolvers } = require("./VideoResolvers.js");

const resolvers = [VideoResolvers, UserResolvers, PlaylistResolvers];

module.exports = { resolvers };
