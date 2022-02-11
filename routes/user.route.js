const express = require("express");
const router = express.Router();
const { login } = require("../controllers/userController");

// Retrieve all Tutorials
router.route("/").post(login);

module.exports = router;
