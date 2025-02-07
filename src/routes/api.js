const express = require("express");

const UserController = require("../controllers/UserController");
const BlogController = require("../controllers/BlogController");
const TeamServiceController = require("../controllers/TeamServiceController");
const Authenticator = require("../middlewares/Authenticator");

const router = express.Router();

// Login User Users UpdateUser DeleteUser

//Registration
router.post("/registration", UserController.Registration);
//Login
router.post("/login", UserController.Login);
// Sending Email OTP
router.get("/sendingOTP", Authenticator, UserController.SendOTP);
// Account Verification
router.get(
  "/verifyingAccount/:otp",
  Authenticator,
  UserController.VerifyAccount
);

// Get Single User
router.get("/user", Authenticator, UserController.User);
// Get All Users
router.get("/users", Authenticator, UserController.Users);
// Update Single User
router.post("/updateUser", Authenticator, UserController.UpdateUser);
// Delete Single User
router.delete("/deleteUser", Authenticator, UserController.DeleteUser);
//Logout
router.get("/logout", UserController.Logout);

router.post("/createBlog", Authenticator, BlogController.createBlog);
router.get("/readBlog", BlogController.readBlog);
router.post("/updateBlog/:id", Authenticator, BlogController.updateBlog);
router.get("/deleteBlog/:id", Authenticator, BlogController.deleteBlog);
/// Team Members
router.post(
  "/addTeamMember",
  Authenticator,
  TeamServiceController.addTeamMember
);
router.get(
  "/readTeamMember",

  TeamServiceController.readTeamMember
);
router.post(
  "/updateTeamMember/:id",
  Authenticator,
  TeamServiceController.updateTeamMember
);
router.get(
  "/deleteTeamMember/:id",
  Authenticator,
  TeamServiceController.deleteTeamMember
);
// service routes
router.post("/addServices", Authenticator, TeamServiceController.addServices);
router.get("/readServices", TeamServiceController.readServices);
router.post(
  "/updateServices/:id",
  Authenticator,
  TeamServiceController.updateServices
);
router.post("/contact", TeamServiceController.contactSend);
router.get(
  "/deleteServices/:id",
  Authenticator,
  TeamServiceController.deleteServices
);

module.exports = router;
