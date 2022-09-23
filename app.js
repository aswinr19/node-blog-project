const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const PORT = 3000;

const dbURI = `mongodb+srv://${process.env.DBUser}:${process.env.DBPass}@node-blog-project.gycq4so.mongodb.net/?retryWrites=true&w=majority`;

//setting up view engine
app.set("view engine", "ejs");

//using static middleware to acces static files
app.use(express.static("public"));
app.use(favicon(path.join(__dirname, 'public/icons', 'favicon.ico')));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(PORT, function () {
      console.log(`listening on http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

//blog routes
app.use(blogRoutes, authRoutes);

//middleware to send 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
