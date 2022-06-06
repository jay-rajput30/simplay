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
    thumbnail: {
      image: {
        type: String,
        default: "https://i.pravatar.cc/150?img=60",
      },
      description: {
        type: String,
        default: "this is the auto-generated desciption of the video.",
      },
    },
    thumbnailImage: {
      type: String,
      default: "http://i3.ytimg.com/vi/UAm0aWvzFI8/hqdefault.jpg",
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
