const express = require("express");
const router = express.Router();
const { tokenCheck } = require("../middleware/verifyToken");
const {
  allContacts,
  createContact,
} = require("../controllers/contactControllers");

// Retrieve all contacts
router.route("/").get(allContacts).post(tokenCheck, createContact);

module.exports = router;
