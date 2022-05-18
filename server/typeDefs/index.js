const { Video } = require("./Video.js");
const { User } = require("./User.js");
const { Playlist } = require("./playlist.js");

const typeDefs = [Video, User, Playlist];

module.exports = { typeDefs };
