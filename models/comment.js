const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    creatorName: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
