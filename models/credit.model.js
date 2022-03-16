module.exports = (sequelize, Sequelize) => {
  const Credit = sequelize.define("credit", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: {
      type: Sequelize.STRING,
    },
    creditNumber: {
      type: Sequelize.INTEGER,
    },
  });

  return Credit;
};
