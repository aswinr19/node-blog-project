const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController");
const { requireAuth } = require("../middleware/authMiddleware");

router.get("/blogs", blogController.blogIndex);

router.get("/blogs/create-blog",requireAuth, blogController.blogCreateGet);

router.post("/blogs/create-blog",  blogController.blogCreatePost);

router.get("/blogs/update-blog/:id", blogController.blogUpdateget);

router.post("/blogs/update-blog", blogController.blogUpdatePost);

router.get("/blogs/show-blog/:id", blogController.blogShow);

router.get("/blogs/delete-blog/:id", blogController.blogDelete);


module.exports = router;
