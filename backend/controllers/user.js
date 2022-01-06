// J'importe mon fichier modèle utilisateur
const User = require("../models/user");
// J'importe dotenv
require("dotenv").config();
// J'importe Bcrypt
const bcrypt = require("bcrypt");
// J'importe JWT
const jwt = require("jsonwebtoken");
// J'importe sequelize
const sequelize = require("../dbConnect");

// Partie enregistrement de l'utilisateur
exports.signup = (req, res, next) => {
    // J'appel la fonction de hashage de bcrypt
    // const hashPassword = bcrypt.hash(req.body.password, 10) // Je sale le mot de passe 10 fois
    // console.log(req.body);
    User.create({ // Je crée mon utilisateur
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })
    // user.save() // Je sauvegarde mon utilisateur créér 
    .then(() => res.status(201).json({ message: "Utilisateur créé !"}))
    .catch(error => res.status(400).json({ error }));
};

// User.destroy
// Partie connexion de l'utilisateur
exports.login = async (req, res, next) => {
    const user = await User.findOne({ where: { email: req.body.email } }) // Je cherche l'email de la requête avec celui enregistré
        if (!user) {
            console.log("Utilisateur non trouvé !");
        } else {
            const comparePassword = bcrypt.compare(req.body.password, user.password)
            if (!comparePassword) { // Si ce n'est pas valide je retourne une erreur
                return res.status(401).json({ error: "Mot de passe incorrect !"});
            }
            res.status(200).json({
                user,
                token: jwt.sign( // J'utilise la méthode sign de JWT pour encodé l'id 
                    { userId: user.id }, // clé de l'id de l'utilisateur
                    "RANDOM_TOKEN_SECRET",
                    { expiresIn: "12h"}, // la clé expire dans 12h
                )
            });
        }
};