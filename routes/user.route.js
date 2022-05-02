const express = require("express");
const router = express.Router();
const {
  login,
  allUsers,
  deleteUser,
  createUser,
  updateUser,
} = require("../controllers/userController");
const { tokenCheck } = require("../middleware/verifyToken");

// Retrieve all Tutorials
router.route("/").post(login).get(tokenCheck, allUsers);
router.route("/:id").put(tokenCheck, updateUser);
router.route("/multiple/delete").post(tokenCheck, deleteUser);
router.route("/new/user").post(tokenCheck, createUser);
module.exports = router;
