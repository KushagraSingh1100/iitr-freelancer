const express = require("express");
const { createPaymentLink, approveMilestone, withdrawFunds } = require("../controllers/payment");

const router = express.Router();


router.post("/deposit", createPaymentLink);


router.post("/milestone/approve", approveMilestone);


router.post("/withdraw", withdrawFunds);

module.exports = router;
