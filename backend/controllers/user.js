const User = require("../models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10); // je veux qu'il sale le mot de passe 10 fois
  console
    .log("Je passe à l'étape de création de l'utilisateur !")
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save() // J'enregistre l'utilisateur
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  // Je compare l'email de l'utilisateur avec celui de la requête
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        // Si cela me retourne false alors j'affiche l'erreur
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      } // Sinon je passe à l'étape suivante
      // Je compare le MDP de l'utilisateur et celui de la requête
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          // si cela me retourne false alors j'affiche l'erreur
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          // Sinon je log l'utilisateur
          res.status(200).json({
            userId: user._id,
            token: process.env.SECRET_KEY,
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.modifyUser = (req, res, next) => {
  const findUser = await FindUser.findOne({ where: { email: req.body.email } });
  if (findUser === null) {
    console.log("Not found !");
  } else {
    console.log(findUser instanceof FindUser);
    console.log(findUser.title);
  }
  // .then((user) => {
  //   if (!user) {
  //     // Si l'utilisateur ne correspond pas alors je renvoi une erreur
  //     return res.status(401).json({ message: "Utilisateur non trouvé !" });
  //   }
  // })
  // .catch((error) =>
  //   res.status(500).json({ message: "il y une erreur : " + error })
  // );
};

exports.deleteUser = (req, res, next) => {};
