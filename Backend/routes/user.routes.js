const { signUp, Login } = require("../controllers/user.controller");

const router = require("express").Router();

router.post("/signup",signUp)
router.post("/login",Login)

module.exports=router;