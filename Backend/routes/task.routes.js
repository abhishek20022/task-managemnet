const express = require("express");
const { auth } = require("../middlewares/auth");
const { CreateTask, GetTasks, UpdateTask, DeleteTask } = require("../controllers/tsak.controller");
const router = express.Router();


router.post("/create",auth,CreateTask)
router.get("/",auth,GetTasks)
router.put("/:id",auth,UpdateTask)
router.delete("/:id",auth,DeleteTask)



module.exports=router