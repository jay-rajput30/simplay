const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const VideoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    link: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("video", VideoSchema);

module.exports = Video;
