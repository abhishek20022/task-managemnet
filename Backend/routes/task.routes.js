const express = require("express");
const { auth } = require("../middlewares/auth");
const { CreateTask, GetTasks } = require("../controllers/tsak.controller");
const router = express.Router();


router.post("/create",auth,CreateTask)
router.get("/",auth,GetTasks)



module.exports=router