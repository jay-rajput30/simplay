const Playlist = require("../models/playlist.model");

const PlaylistResolvers = {
  Query: {
    getAllPlaylists: async (parent, args, context, info) => {
      try {
        return await Playlist.find();
      } catch (e) {
        console.error({ error: e });
      }
    },
  },
  Mutation: {
    getPlaylist: async (parent, args, context, info) => {
      try {
        const { id } = args;
        return await Playlist.findById(id);
      } catch (e) {
        console.error({ error: e });
      }
    },
    getUserPlaylists: async (parent, args, context, info) => {
      try {
        const { userId } = args;
        const playlistsFound = await Playlist.find({ uid: userId });
        return playlistsFound;
      } catch (e) {
        console.error({ error: e });
      }
    },
    addToPlaylist: async (parent, args, context, info) => {
      try {
        const { playlistId, videoId } = args;
        const playlistFound = await Playlist.findById(playlistId);
        playlistFound.videos.push(videoId);
        await playlistFound.save();

        return playlistFound;
      } catch (e) {
        console.error({ error: e });
      }
    },
    removeFromPlaylist: async (parent, args, context, info) => {
      try {
        const { playlistId, videoId } = args;
        const playlistFound = await Playlist.findById(playlistId);
        let newVideoList = playlistFound.videos.filter(
          (item) => item != videoId.toString()
        );
        playlistFound.videos = newVideoList;
        await playlistFound.save();
        return playlistFound;
      } catch (e) {
        console.error({ error: e });
      }
    },
    createPlaylist: async (parent, args, context, info) => {
      try {
        const { uid, name, videoId } = args;
        const newPlaylist = new Playlist({
          uid,
          name,
          videos: [videoId],
        });

        let result = await newPlaylist.save();
        return { ...result._doc, id: result._id };
      } catch (e) {
        console.error({ error: e });
      }
    },
    deletePlaylist: async (parent, args, context, info) => {
      try {
        const { playlistId } = args;
        return await Playlist.findByIdAndDelete(playlistId);
      } catch (e) {
        console.error({ error: e });
      }
    },
  },
};

module.exports = { PlaylistResolvers };
