const db = require("../models");
const expressAsyncHandler = require("express-async-handler");
const User = db.user;
const jwt = require("jsonwebtoken");

const tokenCheck = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id;
      next();
    } catch (error) {
      res.status(500).json({ message: "Unauthorized" });
    }
  if (!token) {
    res.status(404).json({ message: "Token not found" });
  }
});

module.exports = {
  tokenCheck,
};
