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
    console.log(req.body);
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
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }) // Je compare l'email de la requête avec celui enregistré
        .then(user => { 
            if(!user) { // Si l'email ne correspond pas cela renvoie une erreur
                return res.status(401).json({ error: "Utilisateur non trouvé !"});
            }
            bcrypt.compare(req.body.password, user.passord) // Je compare les deux mots de passes 
                .then(valid => {
                    if (!valid) { // Si ce n'est pas valide je retourne une erreur
                        return res.status(401).json({ error: "Mot de passe incorrect !"});
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign( // J'utilise la méthode sign de JWT pour encodé l'id 
                            { userId: user._id }, // clé de l'id de l'utilisateur
                            "RANDOM_TOKEN_SECRET",
                            { expiresIn: "12h"}, // la clé expire dans 12h
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};