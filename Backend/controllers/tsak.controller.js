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

  // Get Tasks Regular user own tasks only Admin all tasks
exports.GetTasks = async (req, res) => {
    try {
      const userId = req.user.id;
      const role = req.userDetails?.role || req.user?.role || req.user?.accountType;
  
      let query = {};
      if (role !== "Admin") {
        query.createdBy = userId;
      }
  
      const tasks = await Task.find(query)
        .populate("createdBy", "name email role status")
        .sort({ createdAt: -1 });
  
      return res.status(200).json({
        success: true,
        message: "Successfully Fetched Tasks",
        tasks,
      });
    } catch (error) {
      // console.error("GetTasks Error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve Tasks",
        error: error.message,
      });
    }
  };