// J'importe la bibliothèque de sequelize
const { Sequelize, DataTypes } = require("sequelize");
// Création de la connexion
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = require("./dbConnect");
// J'importe mon modèle User
const User = require("../models/user");

// Création du modèle en utilisant la connexion
const Post = sequelize.define(
  "Post",
  {
    // Je définis les attributs ici
    postId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false, // équivalant required
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    media: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    pseudo: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
  },
  {
    // Other model options go here
    // sequelize, // We need to pass the connection instance
    // modelName: "Post",
    tableName: "posts",
    timestamps: false,
  }
);

// foreignKey pour la relation
// entre l'utilisateur et son post
Post.belongsTo(User);

// J'exporte mon modèle
// pour pouvoir l'utilisé dans d'autres
// fichiers
module.exports = Post;
