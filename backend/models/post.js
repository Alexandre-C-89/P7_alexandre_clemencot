// J'importe la bibliothèque de sequelize
const { Sequelize, DataTypes } = require("sequelize");
// Création de la connexion
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = require("./dbConnect");

// Création du modèle en utilisant la connexion
const Post = sequelize.define(
  "Post",
  {
    // Je définis les attributs ici
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: false,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: false,
      unique: false,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // équivalant required
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // media: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    timestamps: true,
  }
);

// foreignKey pour les posts
// User.belongsTo(Post);

// J'exporte mon modèle
// pour pouvoir l'utilisé dans d'autres
// fichiers
module.exports = Post;
