// J'importe mon fichier modèle utilisateur
const User = require("../models/user");
// J'importe dotenv
require("dotenv").config();
// J'importe Bcrypt
const bcrypt = require("bcrypt");
// J'importe JWT
const jwt = require("jsonwebtoken");

// Partie enregistrement de l'utilisateur
exports.signup = (req, res, next) => {
  // J'appel la fonction de hashage de bcrypt
  bcrypt
    .hash(req.body.password, 10) // Je sale le mot de passe 10 fois
    .then((hash) => {
      User.create({
        // Je crée mon utilisateur
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash,
      })
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) =>
          res
            .status(400)
            .json({ message: "Erreur lors de la création de compte !" })
        );
    });
};

// Partie connexion de l'utilisateur
exports.login = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } }); // Je cherche l'email de la requête avec celui enregistré
  if (!user) {
    console.log("Utilisateur non trouvé !");
  } else {
    console.log("condition false");
    bcrypt
      .compare(req.body.password, user.password)
      .then((valid) => {
        if (!valid) {
          return res
            .status(401)
            .json({ error: "Mot de passe et/ou email incorrect !" });
        }
        res.status(200).json({
          userId: user._id,
          token: jwt.sign({ userId: user._id }, process.env.SECRET_key, {
            expiresIn: "24h",
          }),
        });
      })
      .catch((error) => res.status(500).json({ error }));
  }
};

// Partie sur l'affichage de tout les utilisateurs
exports.getAllUser = async (req, res, next) => {
  const user = await User.findAll();
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé !" });
  }
};

// Affichage d'un profil d'utilisateur
exports.getOneUser = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.params.userId } }); // Je cherche l'email de la requête avec celui enregistré
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé !" });
  }
};

// Modification d'un profil d'utilisateur
// exports.modifyUser = async (req, res, next) => {
//     console.log("fonction modifyUser déclenchée");
//     // Je récupère l'utilisateur
//     User.findOne( {_id: req.params.id} )
//         .then((user) => {
//             console.log(user);
//             res.status(200).json({ message: "Utilisateur trouvé !"})
//         })
//     User.update({_id: req.params.id})
//     console.log();
// };

// Suppression d'un profil d'utilisateur
exports.deleteUser = async (req, res, next) => {
  const user = await User.findOne({
    where: { id: req.params.userId, email: req.body.email },
  });
  if (!user) {
    res.status(401).json({ message: "Utilisateur non trouvé !" });
  } else {
    User.destroy({ where: { id: req.params.userId } });
    console.log("Utilisateur supprimé !");
    return res.status(200).json({ mesage: "Utilisateur supprimé !" });
  }
};
