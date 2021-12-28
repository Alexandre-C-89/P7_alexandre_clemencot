const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        noUpdate: {
          readOnly: true,
        },
      },
      // Model attributes are defined here
      // Les attributs du model sont définit ici
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
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
};
