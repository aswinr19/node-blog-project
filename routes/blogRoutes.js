const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController");
const { requireAuth } = require("../middleware/authMiddleware");

router.get("/blogs", blogController.blogIndex);

router.get("/blogs/create-blog", blogController.blogCreateGet);

router.post("/blogs/create-blog", requireAuth, blogController.blogCreatePost);

router.get("/blogs/update-blog", blogController.blogUpdateget);

router.post("/blogs/update-blog", blogController.blogUpdatePost);

router.get("/blogs/show/:id", blogController.blogShow);

module.exports = router;
