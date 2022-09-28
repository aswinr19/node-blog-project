const express = require("express");
const router = express.Router();
const userController = require("../controllers/authController");
const { requireAuth } = require("../middleware/authMiddleware");

router.get("/users/signin", userController.userSigninGet);

router.post("/users/signin", userController.userSigninPost);

router.get("/users/signup", userController.userSignupGet);

router.post("/users/signup", userController.userSignupPost);

router.get("/users/logout", userController.userLogoutGet);

router.get("/users/:id",userController.userShow);

module.exports = router;
