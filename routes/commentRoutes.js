const express = require("express");

const router = express.Router();

const commentController = require("../controllers/commentController");
const { requireAuth } = require("../middleware/authMiddleware");

router.post("/comments/create-comment", commentController.commentCreatePost);
router.get("/comments/:id", commentController.commentIndex);


module.exports = router;
