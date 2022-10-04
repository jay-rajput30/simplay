const { db } = require("../models/video.model");
const Video = require("../models/video.model");

const VideoResolvers = {
  Query: {
    getAllVideos: async (parent, args, { user }) => {
      const { isAuth, userId, email, name } = user;
      if (isAuth) {
        try {
          const result = await Video.find({});
          // console.log({result})
          return result;
        } catch (e) {
          console.error({ error: e });
        }
      }
    },
    // getVideo: async(_,_args, {user})=>{
    //   const { isAuth, userId, email, name } = user;
    //   // get the single video from d
    //   // breturn the singelvideo if it is found
    //   if(isAuth){
    //     const videoFound = await Video.findById
    //   }

    // }
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
