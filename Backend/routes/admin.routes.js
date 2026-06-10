const express = require("express");
const { auth, isAdmin } = require("../middlewares/auth");
const { getAllUsers, deleteUser, updateUserStatus, getAllTasks, getActivityLogs } = require("../controllers/admin.controller");
const { DeleteTask } = require("../controllers/tsak.controller");
const router = express.Router();


// Apply auth and isAdmin globally to all admin routes
router.use(auth)
router.use(isAdmin)
// Admin-specific User Management
router.get("/users",getAllUsers)
router.delete("/users/:id", deleteUser);
router.put("/users/:id/status", updateUserStatus);

// Admin-specific Task Management
router.get("/tasks", getAllTasks);
router.delete("/tasks/:id", DeleteTask);
// Admin Activity Logging View
router.get("/activities", getActivityLogs);
module.exports = router;