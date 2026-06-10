const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User=require("../models/user.model")

exports.signUp = async (req, res) => {
    try {
      // data from body
      const { name, email, password, role, status } = req.body;
  
      // validate the data
      if (!name || !email || !password) {
        return res.status(403).json({
          success: false,
          message: "All fields are required",
        });
      }
  
      // check user already exist or not
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User is already registered",
        });
      }
  
      //hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: role || "User",
        status: status || "Active"
        
      });
  
      // Remove password from response
      user.password = undefined;
  
      //return respose user is scuces fully register
      return res.status(200).json({
        success: true,
        message: "User Is Registered Successfully",
        user,
      });
    } catch (error) {
      // console.log(error);
      return res.status(500).json({
        success: false,
        message: "User cannot be registered. Please try again",
      });
    }
  };