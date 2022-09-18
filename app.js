const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

const app = express();

const blogRoutes = require("./routes/blogRoutes");

const PORT = 3000;

const dbURI = `mongodb+srv://${process.env.DBUser}:${process.env.DBPass}@node-blog-project.gycq4so.mongodb.net/?retryWrites=true&w=majority`;

//connect to database

async function connect() {
  try {
    await mongoose.connect(dbURI);
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
}

connect();

//setting up view engine
app.set("view engine", "ejs");

//using static middleware to acces static files
app.use(express.static("public"));

 app.use(express.urlencoded({ extended: true }));

//listening to port 3000
app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}/`);
});

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/signin", (req, res) => {
  res.render("signin", { title: "Signin" });
});

app.post("/signin", (req, res) => {});

app.get("/signup", (req, res) => {
  res.render("signup", { title: "Signup" });
});

app.post("/signup", (req, res) => {});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

//blog routes
app.use(blogRoutes);

//middleware to send 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
