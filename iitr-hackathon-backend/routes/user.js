const express = require("express");
const {
  // handleGetJobs,
  // handleGetProfile,
  // handleGetJob,
  // handleGetHome,
  // handleGetAdminPanel,
  // handleAdminLogin,
  // handleUserLogin,
  // handleUserSignup,
  handleRegister,   
  handleCreateProject,
} = require("../controllers/users");
const router = express.Router();

router.get("/jobs");
router.get("/profile/:id");
router.get("/job/:id");
router.get("/home");
router.get("/admin/panel");
router.post("/admin/login");
router.post("/user/login");
router.post("/user/signup");
router.post("/create/project", handleCreateProject);
router.post("/register",handleRegister);

module.exports = router;

// handleGetJobs handelGetProfile handelGetJob handelGetHome  handelGetAdminPanel handelAdminLogin handelUserLogin
//handelUserSignup
