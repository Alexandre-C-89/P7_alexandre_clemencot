const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passwordValidator = require("password-validator");
const emailValidator = require("email-validator");
require('dotenv').config();


require("dotenv").config();

var passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(1)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


exports.createUser = async (req, res, next) => {
  if ((!passwordSchema.validate(req.body.password) || !emailValidator.validate(req.body.email))) {
    return res.status(400).json({ message: "Password et/ou email n'a pas le format requis"});
  }
  // Output: TESTXXXXXXXXXXX:CLIENT-A
  // Je stocke dans une variable user la création d'un nouveau modèle
  // à partir de l'id avec lequel j'ai envoyer la requête
  const userExist = await User.findOne({ where: { email: req.body.email } });
  if (userExist) {
    return res.status(409).json({ message: "email est déjà utilisé !"})
  }
  User.create({
    ...req.body,
    password: hash,
    image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });
  res.status(201).json({ post: createUser, message: "Utilisateur créé !" });
};

exports.login = async (req, res, next) => {
  // Je compare l'email de l'utilisateur avec celui de la requête
  const user = await User.findOne({ email: req.body.email })
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
            token: jwt.sign(
            { userId: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "12h" }
          )
        })
        .catch((error) => res.status(500).json({ error }));
    })
  })
};

exports.modifyUser = async (req, res, next) => {
  // si l'utilisateur veut modifié sont
  // compte je vérifie si c'est bien l'utilisateur du même compte
  // Sinon il ne peut pas supprimer le compte .
  const findUser = await FindUser.findOne({ where: { email: req.body.email } });
  if (findUser === null) {
    console.log("Not found !");
  } else {
    console.log(findUser instanceof FindUser);
    console.log(findUser.title);
    await findUser.save();
  }
};

exports.deleteUser = async (req, res, next) => {
  // si l'utilisateur veut supprimer sont
  // compte je vérifie si c'est bien l'utilisateur du même compte
  // Sinon il ne peut pas supprimer le compte .
  const findUser = await FindUser.findOne({ where: { email: req.body.email } });
  if (findUser === null) {
    console.log("Vous ne pouvez pas supprimé ce compte !");
  } else {
    await findUser.destroy();
  }
};
