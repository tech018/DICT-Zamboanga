const express = require("express");
const router = express.Router();
const { tokenCheck } = require("../middleware/verifyToken");
const {
  allPhotos,
  createPhoto,
  uploadFile,
  deletePhoto,
  updatePhoto,
} = require("../controllers/photoControllers");

// Retrieve all Tutorials
router.route("/").get(allPhotos).post(tokenCheck, createPhoto);
router.route("/:id").put(tokenCheck, updatePhoto);
router.route("/multiple/delete").post(tokenCheck, deletePhoto);
router.route("/uploadphoto").post(tokenCheck, uploadFile);
router.route("/new/photo").post(tokenCheck, createPhoto);

module.exports = router;
