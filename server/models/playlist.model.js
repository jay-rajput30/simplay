const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PlaylistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    uid: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
  },
  { timestamps: true }
);

const Playlist = mongoose.model("playlist", PlaylistSchema);

module.exports = Playlist;
