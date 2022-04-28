// J'importe la bibliothèque de sequelize
const { Sequelize, DataTypes } = require("sequelize");
// Création de la connexion
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = require("./dbConnect");

// Création du modèle en utilisant la connexion
const User = sequelize.define(
  "User",
  {
    // Je définis les attributs ici
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

// J'exporte mon modèle
// pour pouvoir l'utilisé dans d'autres
// fichiers
module.exports = User;
