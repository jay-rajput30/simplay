const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const AccountSchema = new Schema(
  {
    uid: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    likedVideos: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
    history: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
  },
  { timestamps: true }
);

const Account = mongoose.model("account", AccountSchema);

module.exports = Account;
