const Account = require("../models/account.model");
const Video = require("../models/video.model");

const AccountResolvers = {
  Query: {
    getUserLikedVideos: async (parent, args, context, info) => {
      const { isAuth, userId, email, name } = context;

      if (isAuth) {
        try {
          const { uid } = args;
          const accountDetials = await Account.findOne({ uid });
          return {
            uid: accountDetials.uid,
            likedVideos: accountDetials.likedVideos,
          };
        } catch (e) {
          console.error({ error: e });
        }
      } else {
        throw new AuthenticationError("unauthorized access");
      }
    },
    getUserHistory: async (parent, args, context, info) => {
      const { isAuth, userId, email, name } = context;

      if (isAuth) {
        try {
          const { uid } = args;
          const accountDetials = await Account.findOne({ uid });
          return {
            uid: accountDetials.uid,
            history: accountDetials.history,
          };
        } catch (e) {
          console.error({ error: e });
        }
      } else {
        throw new AuthenticationError("unauthorized access");
      }
    },
  },
  Mutation: {
    updateUserLikedVideos: async (parent, args, context, info) => {
      const { isAuth, userId, email, name } = context;

      if (isAuth) {
        try {
          const { videoId } = args;

          const accountFound = await Account.findOne({ userId });
          const videoFound = await Video.findOne({ videoId });
          videoFound.views = +1;

          const videoAlreadyExists = accountFound.likedVideos.includes(
            videoId.toString()
          );

          if (videoAlreadyExists) {
            const newLikedVideoList = accountFound.likedVideos.filter(
              (item) => item.toString() != videoId.toString()
            );
            accountFound.likedVideos = newLikedVideoList;

            videoFound.likes -= 1;
          } else {
            accountFound.likedVideos.unshift(videoId);
            videoFound.likes += 1;
          }

          await accountFound.save();
          await videoFound.save();
          const updatedAccountFound = await Account.findOne({ userId });

          return videoFound;
          // return {
          //   uid: accountFound.uid,
          //   likedVideos: accountFound.likedVideos,
          // };
        } catch (e) {
          console.error({ error: e });
        }
      } else {
        throw new AuthenticationError("unauthorized access");
      }
    },
    addtoUserHistory: async (parent, args, context, info) => {
      const { isAuth, userId, email, name } = context;

      if (isAuth) {
        try {
          const { uid, videoId } = args;
          const accountFound = await Account.findOne({ uid });
          const existsInHistory = accountFound.history.includes(
            videoId.toString()
          );
          if (!existsInHistory) {
            accountFound.history.unshift(videoId);
            await accountFound.save();
          }
          return { uid: accountFound.uid, history: accountFound.history };
        } catch (e) {
          console.error({ error: e });
        }
      } else {
        throw new AuthenticationError("unauthorized access");
      }
    },
  },
};

module.exports = { AccountResolvers };
