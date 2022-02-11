const db = require("../models");
const asyncHandler = require("express-async-handler");
const User = db.user;
var bcrypt = require("bcrypt");
const generateToken = require("../config/generateToken");

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

module.exports = {
  login,
};
