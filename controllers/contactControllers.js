const db = require("../models");
const asyncHandler = require("express-async-handler");
const Contact = db.contact;
const Op = db.Sequelize.Op;
// Retrieve all Tutorials from the database.

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: contacts } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, contacts, totalPages, currentPage };
};

const allContacts = asyncHandler(async (req, res) => {
  const { page, size, title } = req.query;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  const { limit, offset } = getPagination(page, size);

  Contact.findAndCountAll({
    where: condition,
    limit,
    offset,
    order: [["createdAt", "DESC"]],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving contacts .",
      });
    });
});

const createContact = asyncHandler(async (req, res) => {
  const contact = {
    title: "Sample",
    contactInfo: "Sample",
    contactPos: "Sample",
    image: "sampleimage.jpg",
    clusterReg: "Sample",
    address: "Sample",
    email: "Sample",
    contactNo: "Sample",
  };

  try {
    const createContact = await Contact.create(contact);
    if (createContact) {
      res.status(200).json({ message: "Successfully created contact" });
    } else {
      res.status(400).json({ message: "Unable to process your request!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

const deleteContact = asyncHandler(async (req, res) => {
  const { list } = req.body;

  try {
    if (list.length <= 0)
      return res.status(400).json({ message: "no selected photos" });
    const contact = await Contact.destroy({
      where: { id: list },
    });

    if (contact) {
      res.status(200).json({ message: "Successfully deleted!" });
    } else {
      res.status(404).json({ message: "This Contact cannot or cannot delete" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

const updateContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const {
    title,
    contactInfo,
    contactPos,
    image,
    clusterReg,
    address,
    email,
    contactNo,
  } = req.body;
  try {
    if (!title) return res.status(400).json({ message: "Title is required!" });
    if (!contactInfo)
      return res.status(400).json({ message: "Contact Info is required!" });
    if (!contactPos)
      return res.status(400).json({ message: "Position is required" });
    if (!image) return res.status(400).json({ message: "Image is required!" });
    if (!clusterReg)
      return res
        .status(400)
        .json({ message: "Cluster/Region Info is required!" });
    if (!address)
      return res.status(400).json({ message: "Address is required" });
    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!contactNo)
      return res.status(400).json({ message: "Contact No is required" });

    const newsupdate = await News.update(
      {
        title,
        contactInfo,
        contactPos,
        image,
        clusterReg,
        address,
        email,
        contactNo,
      },
      { where: { id } }
    );
    if (newsupdate) {
      res.status(200).json({ message: `Successfully updated ${title}` });
    } else {
      res.status(404).json({
        message: `Cannot be update ${title} or the id is not found`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal server error!` });
  }
});

module.exports = {
  allContacts,
  createContact,
  deleteContact,
  updateContact,
};
