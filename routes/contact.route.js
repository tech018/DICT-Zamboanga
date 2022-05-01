const express = require("express");
const router = express.Router();
const { tokenCheck } = require("../middleware/verifyToken");
const {
  allContacts,
  createContact,
  deleteContact,
  updateContact,
} = require("../controllers/contactControllers");

// Retrieve all contacts
router.route("/").get(allContacts).post(tokenCheck, createContact);
router.route("/multiple/delete").post(tokenCheck, deleteContact);
router.route("/:id").put(tokenCheck, updateContact);

module.exports = router;
