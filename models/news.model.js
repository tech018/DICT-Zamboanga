module.exports = (sequelize, Sequelize) => {
  const News = sequelize.define("news", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
    picture: {
      type: Sequelize.STRING,
    },
  });

  return News;
};
