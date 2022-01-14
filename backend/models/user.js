// J'importe la bibliothèque de sequelize
const { Sequelize, DataTypes } = require("sequelize");
// Création de la connexion
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = require("./dbConnect");

// Création du modèle en utilisant la connexion
const User = sequelize.define("User", {
    // Je définis les attributs ici
    firstname: {
        type: DataTypes.STRING,
        allowNull: false, // équivalant required
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
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