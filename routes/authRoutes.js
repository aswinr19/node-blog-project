const express = require("express");
const router = express.Router();
const userController = require("../controllers/authController");

router.get("/signin", userController.userSigninGet);

router.post("/signin", userController.userSigninPost);

router.get("/signup", userController.userSignupGet);

router.post("/signup", userController.userSignupPost);

module.exports = router;
