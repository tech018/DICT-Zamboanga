const express = require("express");
const router = express.Router();
const {
  allNews,
  createNews,
  findOne,
  deleteNews,
  updateNews,
} = require("../controllers/newControllers");
const { tokenCheck } = require("../middleware/verifyToken");

// Retrieve all contacts
router.route("/").get(allNews).post(tokenCheck, createNews);
router.route("/:id").put(tokenCheck, updateNews);
router.route("/single/:id").get(findOne);
router.route("/multiple/delete").post(tokenCheck, deleteNews);

module.exports = router;
