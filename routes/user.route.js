const express = require("express");
const router = express.Router();
const { login, allUsers } = require("../controllers/userController");
const { tokenCheck } = require("../middleware/verifyToken");

// Retrieve all Tutorials
router.route("/").post(login).get(tokenCheck, allUsers);

module.exports = router;
