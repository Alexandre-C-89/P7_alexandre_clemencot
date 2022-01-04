// J'importe la bibliothèque de sequelize
const { Sequelize, DataTypes } = require("sequelize");
// Création de la connexion
const sequelize = new Sequelize("sqlite::memory:");

// Création du modèle en utilisant la connexion
const User = sequelize.define("User", {
    // Je définis les attributs ici
    firstName: {
        type: DataTypes.STRING,
        required: true,
    },
    lastName: {
        type: DataTypes.STRING,
        required: true,
    },
})

// J'exporte mon modèle 
// pour pouvoir l'utilisé dans d'autres 
// fichiers
module.exports = sequelize;