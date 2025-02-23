const express = require("express");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
require("dotenv").config();

const router = express.Router();

// Admin login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // // Generate JWT token
    // const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });

    res.json({ message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
});
// Admin registration route
router.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }
    const existingEmail = await Admin.findOne({ email })
    if(existingEmail){
      return res.status(400).json({ message: "Email already exists" });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin
    const newAdmin = new Admin({ username, password: hashedPassword,email });
    await newAdmin.save();

    // // Generate JWT token
    // const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
