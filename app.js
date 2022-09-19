const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

const app = express();

const blogRoutes = require("./routes/blogRoutes");

const userRoutes = require("./routes/userRoutes");

const PORT = 3000;

const dbURI = `mongodb+srv://${process.env.DBUser}:${process.env.DBPass}@node-blog-project.gycq4so.mongodb.net/?retryWrites=true&w=majority`;
//connect to database

// async function connect() {
//   try {
//     await mongoose.connect(dbURI);
//     console.log("connected to database");
//   } catch (err) {
//     console.log(err);
//   }
// }

// connect();

//setting up view engine
app.set("view engine", "ejs");

//using static middleware to acces static files
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

//set favicon
// app.use('/favicon.png', express.static('icons/favicon.png'));

//listening to port 3000
// app.listen(PORT, function () {
//   console.log(`listening on http://localhost:${PORT}/`);
// });

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
app.use(blogRoutes, userRoutes);

//middleware to send 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
