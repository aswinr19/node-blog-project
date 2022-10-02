const express = require("express");

const router = express.Router();

const commentController = require("../controllers/commentController");
const { requireAuth } = require("../middleware/authMiddleware");

router.post("/comments/:id", commentController.commentIndex);
router.post("/comments/create-comment", commentController.commentCreatePost);

module.exports = router;
