const User = require("../models/user");

const userSignupGet = (req, res) => {
  res.render("auth/signup", { title: "Signup" });
};

const userSignupPost = (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const userSigninGet = (req, res) => {
  res.render("auth/signin", { title: "Signin" });
};

const userSigninPost = (req, res) => {};

module.exports = {
  userSigninGet,
  userSigninPost,
  userSignupGet,
  userSignupPost,
};
