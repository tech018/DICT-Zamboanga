const db = require("../models");
const asyncHandler = require("express-async-handler");
const Contact = db.contact;
const Op = db.Sequelize.Op;
// Retrieve all Tutorials from the database.
const allContacts = asyncHandler(async (req, res) => {
  const pageNumber = req.query.pageNumber;
  const title = req.query.title;

  try {
    const contact = await Contact.findAll({
      where: {
        title: { [Op.like]: `%${title}%` },
      },
      limit: Number(pageNumber),
    });
    const allcontact = await Contact.findAll({
      where: {
        title: { [Op.like]: `%${title}%` },
      },
    });
    if (contact) {
      res.status(200).json({ limitcontact: contact, allcontacts: allcontact });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

const createContact = asyncHandler(async (req, res) => {
  const {
    title,
    contactInfo,
    contactPos,
    image,
    clusterReg,
    address,
    email,
    contactNo,
  } = req.body.contact;
  if (!title)
    return res
      .status(400)
      .json({ message: "Name of Government Department is required" });
  if (!contactInfo)
    return res
      .status(400)
      .json({ message: "Name of Government Official is required" });
  if (!contactPos)
    return res.status(400).json({ message: "Designation is required" });

  if (!clusterReg)
    return res.status(400).json({ message: "Cluster/Region is required" });

  if (!address) return res.status(400).json({ message: "Address is required" });
  if (!email) return res.status(400).json({ message: "Email is required" });
  if (!contactNo)
    return res.status(400).json({ message: "Contact Number is required" });

  const contacts = {
    title,
    contactInfo,
    contactPos,
    image,
    clusterReg,
    address,
    email,
    contactNo,
  };
  try {
    const createContact = await Contact.create(contacts);
    if (createContact) {
      res.status(200).json({ message: "Successfully created photo" });
    } else {
      res.status(400).json({ message: "Unable to process your request!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = {
  allContacts,
  createContact,
};
