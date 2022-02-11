const express = require("express");
const router = express.Router();
const {
  allNews,
  createNews,
  findOne,
  deleteNews,
} = require("../controllers/newControllers");
const { tokenCheck } = require("../middleware/verifyToken");

// Retrieve all contacts
router.route("/").get(allNews).post(tokenCheck, createNews);
router.route("/single/:id").get(findOne).delete(tokenCheck, deleteNews);

module.exports = router;
