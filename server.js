const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models/index");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();
dotenv.config();

db.sequelize.sync();

app.use(express.urlencoded({ extended: true }));
const contactRoute = require("./routes/contact.route");
const photoRoute = require("./routes/photo.route");
const userRoute = require("./routes/user.route");
const newsRoute = require("./routes/news.route");

app.use(cors());

app.use(express.json());
app.use(bodyParser.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
  })
);

app.use("/api/contact", contactRoute);
app.use("/api/photo", photoRoute);
app.use("/api/user", userRoute);
app.use("/api/news", newsRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
