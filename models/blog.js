const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique : true,
      minlength: 5,
    },
    snippet: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
      minlength: 100,
    },
    topic: {
      type: String,
      required: true,
    },
    creatorName: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
