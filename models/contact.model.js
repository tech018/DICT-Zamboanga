module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define("contact", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    contactInfo: {
      type: Sequelize.STRING,
    },
    contactPos: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    clusterReg: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    contactNo: {
      type: Sequelize.STRING,
    },
  });

  return Contact;
};
