const Comment = require("../models/comment");

const handleErrors = (err) => {
  console.log(err.message, err.code);

  let errors = { comment: "", createdBy: "", creatorName: "", belongsTo: "" };

  //validating errors
  if (err.message.includes("Comment validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const commentIndex = (req, res) => {
  const { belongsTo } = req.body;

  Comment.find(belongsTo)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const commentCreatePost = (req, res) => {
  const { comment, creatorName, createdBy, belongsTo } = req.body;

  try {
    const newComment = Comment.create({
      comment,
      creatorName,
      createdBy,
      belongsTo,
    });

    res.status(201).json({ comment: newComment._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports = {
  commentIndex,
  commentCreatePost,
};
