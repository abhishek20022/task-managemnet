const Activity=require("../models/activity.model")

exports.logActivity = async (userId, action, taskId = null) => {
    try {
      if (!userId) {
        console.warn("activityLogger: userId is missing");
        return;
      }
  
      await Activity.create({
        userId,
        taskId,
        action,
      });
    } catch (error) {
      console.error("Failed to log activity:", error);
    }
  };