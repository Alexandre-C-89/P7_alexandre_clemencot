// J'importe la bibliothèque de sequelize
const { Sequelize, DataTypes } = require("sequelize");
// Création de la connexion
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = require("../dbConnect");

// Création du modèle en utilisant la connexion
const Post = sequelize.define("Post", {
    // Je définis les attributs ici
    Title: {
        type: DataTypes.STRING,
        allowNull: false, // équivalant required
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    media: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    UserId: {
        type: DataTypes.STRING,
        allowNull: false, 
    }
},
    {
        tableName: "users",
        timestamps: false,
    }
);

// J'exporte mon modèle 
// pour pouvoir l'utilisé dans d'autres 
// fichiers
module.exports = Post;