const Blog = require("../models/blog");

const blogIndex = (req, res) => {
  Blog.find()
    .then((result) => {
      // res.send(result);
      res.render("blogs/index", { title: "Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blogCreateGet = (req, res) => {
  res.render("blogs/create", { title: "Create Blog" });
};

const blogCreatePost = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });

  // console.log(req.body);
};

const blogUpdateget = (req, res) => {
  const id = String(req.params.id);

  Blog.findById(id)
    .then((result) => {
      res.render("blogs/update", { title: "Update Blog", blog: result });
    })
    .catch((err) => {
      res.send(err);
    });
};

const blogUpdatePost = async (req, res) => {
  //console.log(req.body);

  const { id, title, snippet, content, topic } = req.body;

  const blog = await Blog.findById(id);

  blog.overwrite({ title, snippet, content, topic });

  await blog.save();

  res.redirect("/blogs");
};

const blogShow = (req, res) => {
  const id = String(req.params.id);

  Blog.findById(id)
    .then((result) => {
      res.render("blogs/show", { title: "Show Blogs", blog: result });
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
