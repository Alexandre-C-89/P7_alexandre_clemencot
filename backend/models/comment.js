// J'importe la bibliothèque de sequelize
const { Sequelize, DataTypes } = require("sequelize");
// Création de la connexion
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = require("./dbConnect");
// J'importe mon modèle User
// const User = require("../models/user");

// Création du modèle en utilisant la connexion
const Comment = sequelize.define(
  "Comment",
  {
    // Je définis les attributs ici
    commentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false, // équivalant required
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "comments",
    timestamps: true,
  }
);

// foreignKey pour la relation
// entre le commentaire et le post
// Post.belongsTo(User);

// J'exporte mon modèle
// pour pouvoir l'utilisé dans d'autres
// fichiers
module.exports = Comment;
