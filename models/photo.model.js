module.exports = (sequelize, Sequelize) => {
  const Photo = sequelize.define("photo", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    src: {
      type: Sequelize.STRING,
    },
    caption: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
  });

  return Photo;
};
