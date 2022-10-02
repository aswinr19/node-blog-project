const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: [8, "Minimum title length is 5 characters"],
      maxlength: [50, "Maximum content length is 50 characters"],

    },
    snippet: {
      type: String,
      required: [true, "Please enter an snippet"],
      minlength: [20, "Minimum snippet length is 20 characters"],
      maxlength: [100, "Maximum content length is 100 characters"],

    },

    content: {
      type: String,
      required: [true, "Please enter an content"],
      minlength: [100, "Minimum content length is 100 characters"],
      maxlength: [5000, "Maximum content length is 5000 characters"],

    },
    topic: {
      type: String,
      required: [true, "Please enter an topic"],
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
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
