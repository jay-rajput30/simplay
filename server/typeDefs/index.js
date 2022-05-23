const { Video } = require("./Video.js");
const { User } = require("./User.js");
const { Playlist } = require("./playlist.js");
const { Account } = require("./Account.js");

const typeDefs = [Video, User, Playlist, Account];

module.exports = { typeDefs };
