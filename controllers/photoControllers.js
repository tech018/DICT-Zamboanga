const db = require("../models");
const asyncHandler = require("express-async-handler");
const Photo = db.photos;
const Op = db.Sequelize.Op;
// Retrieve all Tutorials from the database.

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: photos } = data;

  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, photos, totalPages, currentPage };
};

const allPhotos = asyncHandler(async (req, res) => {
  const { page, size, category, caption } = req.query;

  const { limit, offset } = getPagination(page, size);

  await Photo.findAndCountAll({
    where: {
      category: { [Op.like]: `%${category}%` },
      caption: { [Op.like]: `%${caption}%` },
    },
    limit,
    offset,
    order: [["createdAt", "DESC"]],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
});

const createPhoto = asyncHandler(async (req, res) => {
  const photos = {
    src: "sampleimage.jpg",
    caption: "Sample Caption",
    category: "food",
  };
  try {
    const createphoto = await Photo.create(photos);
    if (createphoto) {
      res.status(200).json({ message: "Successfully created photo" });
    } else {
      res.status(400).json({ message: "Unable to process your request!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

const uploadFile = asyncHandler(async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({ message: "No files were uploaded" });

    const file = req.files.file;

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png")
      return res.status(400).json({ message: "File is not valid" });

    if (file.size > 1024 * 1024)
      return res
        .status(400)
        .json({ message: "Size is too large maximum of 1mb only" });

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const sampleFile = req.files.file;

    const fileName = Date.now() + sampleFile.name;

    const filePath = "./frontend/public/zamboanga/" + fileName;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(filePath, function (err) {
      if (err) return res.status(500).json({ message: err });

      res.status(200).json({ image: fileName });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

const deletePhoto = asyncHandler(async (req, res) => {
  const { list } = req.body;

  try {
    if (list.length <= 0)
      return res.status(400).json({ message: "no selected photos" });
    const photo = await Photo.destroy({
      where: { id: list },
    });

    if (photo) {
      res.status(200).json({ message: "Successfully deleted!" });
    } else {
      res.status(404).json({ message: "This photo cannot or cannot delete" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

const updatePhoto = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { src, caption, category } = req.body;
  try {
    if (!src)
      return res.status(400).json({ message: "Image src is required!" });
    if (!caption)
      return res.status(400).json({ message: "Image title is required!" });
    if (!category)
      return res.status(400).json({ message: "Please select a category!" });
    const photoupdate = await Photo.update(
      { src, caption, category },
      { where: { id } }
    );
    if (photoupdate) {
      res.status(200).json({ message: `Successfully updated ${caption}` });
    } else {
      res.status(404).json({
        message: `Cannot be update ${caption} or the id is not found`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal server error!` });
  }
});

module.exports = {
  allPhotos,
  createPhoto,
  uploadFile,
  deletePhoto,
  updatePhoto,
};
