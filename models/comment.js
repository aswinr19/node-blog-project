const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: [true, "Please enter a comment"],
    },
    creatorName: {
      type: String,
      required: [true, "Creator name can't be null"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Created by can't be null"],
    },
    belongsTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: [true, "Belongs to can't be null"],
    },
  },

  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
