const axios = require("axios");
require("dotenv").config();
const User = require("../models/userModel.js");
const Milestone = require("../models/milestones.js");

exports.createPaymentLink = async (req, res) => {
  try {
    const { employerId, milestoneId, amount, currency } = req.body;

    const employer = await User.findById(employerId);
    if (!employer || employer.role !== "employer") {
      return res.status(400).json({ message: "Invalid Employer" });
    }

    const milestone = await Milestone.findById(milestoneId);
    if (!milestone) {
      return res.status(404).json({ message: "Milestone not found" });
    }

    const cashfreeResponse = await axios.post(
      "https://sandbox.cashfree.com/pg/links",
      {
        customer_details: {
          customer_id: employerId,
          customer_name: employer.username,
          customer_email: employer.email,
          customer_phone: employer.phone,
        },
        link_amount: amount,
        link_currency: currency || "INR",
        link_purpose: `Milestone Payment for ${milestone.title}`,
        link_id: `MS_${milestoneId}_${Date.now()}`,
        redirect_url: "https://yourfrontend.com/payment-success",
      },
      {
        headers: {
          "x-client-id": process.env.CLIENT_ID,
          "x-client-secret": process.env.CLIENT_SECRET,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    res.status(200).json({
      success: true,
      paymentLink: cashfreeResponse.data.link_url,
    });
  } catch (error) {
    console.error("Deposit Error:", error.response?.data || error.message);
    res.status(500).json({ message: "Error creating payment link" });
  }
};

// Dummy handlers for milestone approval and withdrawal (implement them)
exports.approveMilestone = async (req, res) => {
  res.status(200).json({ message: "Milestone approved successfully" });
};

exports.withdrawFunds = async (req, res) => {
  res.status(200).json({ message: "Funds withdrawn successfully" });
};
