const express = require("express");
const router = express.Router();
const { tokenCheck } = require("../middleware/verifyToken");
const {
  allPhotos,
  createPhoto,
  uploadFile,
  deletePhoto,
} = require("../controllers/photoControllers");
const { route } = require("express/lib/application");

// Retrieve all Tutorials
router.route("/").get(allPhotos).post(createPhoto);
router.route("/single/:id").delete(tokenCheck, deletePhoto);
router.route("/uploadphoto").post(tokenCheck, uploadFile);
router.route("/new/photo").post(tokenCheck, createPhoto);

module.exports = router;
