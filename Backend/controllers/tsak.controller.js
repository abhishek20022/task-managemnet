const Task = require("../models/task.model");
const { logActivity } = require("../utils/activitylogger");


// Create Task
exports.CreateTask = async (req, res) => {
    try {
      const { title, description, status } = req.body;
      const userId = req.user.id;
  
      if (!title) {
        return res.status(400).json({
          success: false,
          message: "Title is required",
        });
      }
  
      const task = await Task.create({
        title,
        description,
        status: status || "Pending",
        createdBy: userId,
      });
  
      // Log Activity
      await logActivity(userId, "task_create");
  
      return res.status(201).json({
        success: true,
        message: "Task created successfully",
        task,
      });
    } catch (error) {
      // console.error("CreateTask Error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to create Task",
        error: error.message,
      });
    }
  };