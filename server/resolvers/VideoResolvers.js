const Video = require("../models/video.model");

const VideoResolvers = {
  Query: {
    hello: () => {
      return "hello world";
    },
    getAllVideos: async () => {
      try {
        return await Video.find();
      } catch (e) {
        console.error({ error: e });
      }
    },
  },
  Mutation: {
    addVideo: async (parent, args, context, info) => {
      try {
        const { title, views, likes, link, category } = args.video;
        const newVideo = new Video({ title, views, likes, link, category });
        await newVideo.save();
      } catch (e) {
        console.error({ error: e });
      }
    },
    getVideo: async (parent, args, context, info) => {
      try {
        const { id } = args;
        return await Video.findById(id);
      } catch (e) {
        console.error({ error: e });
      }
    },
    deleteVideo: async (parent, args, context, info) => {
      try {
        const { id } = args;
        return await Video.findByIdAndDelete(id);
      } catch (e) {
        console.error({ error: e });
      }
    },
  },
};

module.exports = { VideoResolvers };
