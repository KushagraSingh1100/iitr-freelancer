const User = require("../models/userModel.js");
const express = require("express");
const axios = require("axios");
require("dotenv").config();
const PROJECT = require("../models/projects");
const router = express.Router({ mergeParams: true });

const handleRegister = async (req, res) => {
  try {
    const { username, email, phone, password, role } = req.body;

    if (role !== "employer") {
      return res
        .status(403)
        .json({ message: "Only employers can register here." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const newEmployer = new User({
      username,
      email,
      phone,
      password,
      role: "employer",
    });

    await newEmployer.save();

    const cashfreeResponse = await axios.post(
      "https://sandbox.cashfree.com/pg/settlement/v1/create",
      {
        customer_id: newEmployer._id,
        email: newEmployer.email,
        phone: newEmployer.phone,
        name: newEmployer.username,
      },
      {
        headers: {
          "X-Client-Id": process.env.CLIENT_ID,
          "X-Client-Secret": process.env.CLIENT_SECRET,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log("Escrow Account Created:", cashfreeResponse.data);

    newEmployer.escrowAccountId = cashfreeResponse.data.customer_id;
    await newEmployer.save();

    res.status(201).json({
      message: "Employer registered successfully",
      employer: newEmployer,
      escrow: cashfreeResponse.data,
    });
  } catch (error) {
    console.error(
      "Employer Registration Error:",
      error.response?.data || error.message
    );
    res.status(500).json({ message: "Error registering employer" });
  }
};

const handleCreateProject = async (req, res) => {
  try {
    const {
      projectname,
      deadline,
      description,
      amount,
      tags,
      difficulty,
      proposals,
    } = req.body;

    const newProject = new PROJECT({
      projectname,
      deadline,
      description,
      amount,
      tags,
      difficulty,
      proposals,
    });

    await newProject.save();
    res
      .status(201)
      .json({ message: "Project created successfully!", project: newProject });
  } catch (error) {
    console.error("Project Creation Error:", error);
    res.status(500).json({ message: "Failed to create project" });
  }
};

module.exports = { handleRegister, handleCreateProject };
