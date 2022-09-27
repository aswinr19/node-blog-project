const Blog = require("../models/blog");

const handleErrors = (err) => {
  console.log(err.message, err.code);

  let errors = { title: "", snippet: "", content: "", topic: "" };

  //duplicate error

  if (err.code === 11000) {
    errors.title = " that title is already created!";
    return errors;
  }
  //validating errors
  if (err.message.includes("Blog validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const blogIndex = (req, res) => {
  Blog.find()
    .then((result) => {
      // res.send(result);
      res.render("blog/index", { title: "Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blogCreateGet = (req, res) => {
  res.render("blog/create", { title: "Create Blog" });
};

const blogCreatePost = async (req, res) => {
  // const blog = new Blog(req.body);

  // blog
  //   .save()
  //   .then((result) => {
  //     res.redirect("/blogs");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  const { title, snippet, content, topic, createdBy, creatorName } = req.body;

  try {
    const blog = await Blog.create({
      title,
      snippet,
      content,
      topic,
      createdBy,
      creatorName,
    });

    res.status(201).json({ blog: blog._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
  // console.log(req.body);
};

const blogUpdateget = (req, res) => {
  const id = String(req.params.id);

  Blog.findById(id)
    .then((result) => {
      res.render("blog/update", { title: "Update Blog", blog: result });
    })
    .catch((err) => {
      res.send(err);
    });
};

const blogUpdatePost = async (req, res) => {
  //console.log(req.body);

  const { id, title, snippet, content, topic, createdBy, creatorName } =
    req.body;

  // const blog = await Blog.findById(id);

  // blog.overwrite({ title, snippet, content, topic });

  // await blog.save();

  // res.redirect("/blogs");

  try {
    const blog = await Blog.findById(id);
    blog.overwrite({ title, snippet, content, topic, createdBy, creatorName });
    await blog.save();

    res.status(201).json({ blog: blog._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const blogShow = (req, res) => {
  const id = String(req.params.id);

  Blog.findById(id)
    .then((result) => {
      res.render("blog/show", { title: "Show Blogs", blog: result });
    })
    .catch((err) => {
      res.send(err);
    });
};

const blogDelete = (req, res) => {
  const id = String(req.params.id);
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  blogIndex,
  blogCreateGet,
  blogCreatePost,
  blogUpdateget,
  blogUpdatePost,
  blogShow,
  blogDelete,
};
