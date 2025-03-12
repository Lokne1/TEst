const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();
//getuser
router.get("/",middlewareController.verifyToken,userController.getAllUser);
//deleteuser
router.delete("/:id",middlewareController.verifyTokenAndAdmin,userController.deleteUser);
module.exports = router ;