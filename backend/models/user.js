const { Sequelize, DataTypes } = require("sequelize");

const User = Sequelize.define(
  "User",
  {
    // Model attributes are defined here
    // Les attributs du model sont définit ici
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      // Par défaut allowNull est vrai
    },
    isAdmin: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      require: true,
    },
    password: {
      type: DataTypes.STRING,
      require: true,
    },
  },
  {
    // Other model options go here
    // Autre option de model peuvent être placé ici
  }
);

module.exports = User;
