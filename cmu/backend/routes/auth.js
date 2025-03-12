const authController = require("../controllers/authController");

const router = require("express").Router();



router.post("/register", authController.registerUser);



router.post("/login", authController.loginUser);


module.exports = router;