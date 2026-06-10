const express = require("express");
const { auth } = require("../middlewares/auth");
const { CreateTask } = require("../controllers/tsak.controller");
const router = express.Router();


router.post("/create",auth,CreateTask)



module.exports=router