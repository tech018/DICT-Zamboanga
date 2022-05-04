const db = require("../models");
const asyncHandler = require("express-async-handler");
const User = db.user;
var bcrypt = require("bcrypt");
const generateToken = require("../config/generateToken");
const Op = db.Sequelize.Op;

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required!" });
  if (!password)
    return res.status(400).json({ message: "Password is required" });

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Invalid Password or Email!" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).json({
          accessToken: null,
          message: "Invalid Password or Email!",
        });
      }

      res.status(200).json({
        email: user.email,
        role: user.role,
        picture: user.avatar,
        accessToken: generateToken(user.id),
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: users } = data;

  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, users, totalPages, currentPage };
};

const allUsers = asyncHandler(async (req, res) => {
  const { page, size, email } = req.query;

  console.log(email);

  const { limit, offset } = getPagination(page, size);

  User.findAndCountAll({
    where: {
      email: { [Op.like]: `%${email}%` },
    },
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
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
});

const createUser = asyncHandler(async (req, res) => {
  const { email, password, avatar } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required!" });
  if (!validateEmail(email))
    return res.status(400).json({ message: "Invalid emails." });
  if (!password)
    return res.status(400).json({ message: "Password is required" });

  if (!avatar) return res.status(400).json({ message: "avatar is required" });

  var salt = bcrypt.genSaltSync(10);
  const passwordHash = await bcrypt.hashSync(password, salt);

  const userNew = {
    email,
    password: passwordHash,
    role: 1,
    avatar,
  };
  try {
    const newUsers = await User.create(userNew);
    if (newUsers) {
      res
        .status(200)
        .json({ message: `Successfully created ${email} account` });
    } else {
      res.status(400).json({ message: "Unable to process your request!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { list } = req.body;

  try {
    if (list.length <= 0)
      return res.status(400).json({ message: "no selected photos" });
    const user = await User.destroy({
      where: { id: list },
    });

    if (user) {
      res.status(200).json({ message: "Successfully deleted!" });
    } else {
      res.status(404).json({ message: "This User cannot or cannot delete" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { email, password } = req.body;
  try {
    if (!email) return res.status(400).json({ message: "Title is required!" });
    if (!validateEmail(email))
      return res.status(400).json({ message: "Invalid emails." });
    if (!password)
      return res.status(400).json({ message: "content is required!" });

    var salt = bcrypt.genSaltSync(10);
    const passwordHash = await bcrypt.hashSync(password, salt);

    const userupdate = await User.update(
      { email, pasword: passwordHash },
      { where: { id } }
    );
    if (userupdate) {
      res.status(200).json({ message: `Successfully updated ${email}` });
    } else {
      res.status(404).json({
        message: `Cannot be update ${email} or the id is not found`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal server error!` });
  }
});

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

module.exports = {
  login,
  allUsers,
  createUser,
  deleteUser,
  updateUser,
};
