const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Post = sequelize.define(
  "Post",
  {
    // Model attributes are defined here
    // Les attributs du model sont définit ici
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      // Par défaut allowNull est vrai
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    // Autre option de model peuvent être placé ici
  }
);

module.exports = Post;
