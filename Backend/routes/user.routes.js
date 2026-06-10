const { signUp } = require("../controllers/user.controller");

const router = require("express").Router();

router.post("/signup",signUp)

module.exports=router;