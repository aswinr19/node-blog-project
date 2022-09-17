const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

const app = express();

const blogRoutes = require("./routes/blogRoutes");


const PORT = 3000;

// const dbURI = `mongodb+srv://${process.env.DBUser}:${process.env.DBPass}@cluster0.3pqa0cb.mongodb.net/?retryWrites=true&w=majority`;

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
//  mongoose.connect(dbURI,{}).then().catch();

//setting up view engine
app.set("view engine", "ejs");

//using static middleware to acces static files
app.use(express.static("public"));

//listening to port 3000
app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}/`);
});

//routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
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


// app.get("/create-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog",
//     snippet: "new blog snippet",
//     content: "new blog content",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//blog routes
app.use(blogRoutes);

//middleware to send 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
