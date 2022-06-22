const Video = require("../models/video.model");

const VideoResolvers = {
  Query: {
    getAllVideos: async (parent, args, context, info) => {
      const { isAuth, userId, email, name } = context;

      if (isAuth) {
        try {
          return await Video.find();
        } catch (e) {
          console.error({ error: e });
        }
      } else {
        throw new AuthenticationError("unauthorized access");
      }
    },
  },
  Mutation: {
    addVideo: async (parent, args, context, info) => {
      const { isAuth, userId, email, name } = context;

      if (isAuth) {
        try {
          const {
            title,
            views,
            likes,
            link,
            category,
            description,
            thumbnailImage,
          } = args.video;
          const thumbnail = {
            image: `https://i.pravatar.cc/150?img=${Math.floor(
              Math.random() * 21
            )}`,
            description,
          };
          const newVideo = new Video({
            title,
            views,
            likes,
            link,
            category,
            thumbnail,
            thumbnailImage,
          });
          await newVideo.save();
        } catch (e) {
          console.error({ error: e });
        }
      } else {
        throw new AuthenticationError("unauthorized access");
      }
    },
    getVideo: async (parent, args, context, info) => {
      const { isAuth, userId, email, name } = context;

      if (isAuth) {
        try {
          const { id } = args;
          return await Video.findById(id);
        } catch (e) {
          console.error({ error: e });
        }
      } else {
        throw new AuthenticationError("unauthorized access");
      }
    },
    deleteVideo: async (parent, args, context, info) => {
      const { isAuth, userId, email, name } = context;

      if (isAuth) {
        try {
          const { id } = args;
          return await Video.findByIdAndDelete(id);
        } catch (e) {
          console.error({ error: e });
        }
      } else {
        throw new AuthenticationError("unauthorized access");
      }
    },
  },
};

module.exports = { VideoResolvers };
