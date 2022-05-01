const db = require("../models");
const asyncHandler = require("express-async-handler");
const News = db.news;
const Op = db.Sequelize.Op;
// Retrieve all news from the database.

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: news } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, news, totalPages, currentPage };
};
const allNews = asyncHandler(async (req, res) => {
  const { page, size, title } = req.query;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  const { limit, offset } = getPagination(page, size);

  News.findAndCountAll({
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
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
});

const createNews = asyncHandler(async (req, res) => {
  const news = {
    title: "New news",
    content: "<span>New content for new news</span>",
    picture: "sampleimage.jpg",
  };
  try {
    const createnews = await News.create(news);
    if (createnews) {
      res.status(200).json({ message: "Successfully created news" });
    } else {
      res.status(400).json({ message: "Unable to process your request!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

const findOne = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const single = await News.findByPk(id);
  try {
    if (single) {
      res.status(200).json(single);
    } else {
      res.status(404).json({ message: "This news cannot found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

const deleteNews = asyncHandler(async (req, res) => {
  const { list } = req.body;

  try {
    if (list.length <= 0)
      return res.status(400).json({ message: "no selected photos" });
    const news = await News.destroy({
      where: { id: list },
    });

    if (news) {
      res.status(200).json({ message: "Successfully deleted!" });
    } else {
      res.status(404).json({ message: "This news cannot or cannot delete" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

const updateNews = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { title, content, picture } = req.body;
  try {
    if (!title) return res.status(400).json({ message: "Title is required!" });
    if (!content)
      return res.status(400).json({ message: "content is required!" });
    if (!picture)
      return res.status(400).json({ message: "picture is required" });

    const newsupdate = await News.update(
      { title, content, picture },
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
  allNews,
  createNews,
  findOne,
  deleteNews,
  updateNews,
};
