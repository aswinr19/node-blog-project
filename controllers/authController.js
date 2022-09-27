const User = require("../models/user");
const jwt = require("jsonwebtoken");



const handleErrors = (err) => {
  console.log(err.message, err.code);

  let errors = { email: "", password: "" };

  //incorrect email

  if (err.message === "incorrect email") {
    errors.email = "that email is not registered";
  }

  //incorrect password
  if (err.message === "incorrect password") {
    errors.password = "that password is incorrect";
  }
  //duplicate error

  if (err.code === 11000) {
    errors.email = " that email is already registered";
    return errors;
  }
  //validating errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: maxAge,
  });
};

const userSignupGet = (req, res) => {
  res.render("auth/signup", { title: "Signup" });
};

const userSignupPost = async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    const user = await User.create({
      fname,
      lname,
      email,
      password,
    });

    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
  // console.log(fname, lname, email, password);
};

const userSigninGet = (req, res) => {
  res.render("auth/signin", { title: "Signin" });
};

const userSigninPost = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const userLogoutGet = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });

  res.redirect("/blogs");
};

const userShow = (req,res) => {

  const id = String(req.params.id);

  User.findById(id).then( (result) => {
    res.render("auth/show",{ title: "User Profile", person : result });
  }).catch( (err) => {
    console.log(err);
  });
};

module.exports = {
  userSigninGet,
  userSigninPost,
  userSignupGet,
  userSignupPost,
  userLogoutGet,
  userShow
};
