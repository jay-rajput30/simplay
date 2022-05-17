const { UserResolvers } = require("./UserResolvers.js");
const { VideoResolvers } = require("./VideoResolvers.js");

const resolvers = [VideoResolvers, UserResolvers];

module.exports = { resolvers };
