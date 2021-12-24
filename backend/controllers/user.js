const User = require("../models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.createUser = async (req, res, next) => {
  try {
    bcrypt;
    // async / await
    // await bcrypt
    // sequelize.User.create car save ne marche pas
    // ...req.body
    // changer password par le hash
    // image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    const user = await sequelize.User.create({ where: { id: userId } });
    const newUser = new User({
      ...req.body,
      email: req.body.email,
      password: hash,
      image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    });
    const createUser = await sequelize.User.create({ newUser });
    res.status(201).json({ post: createUser, message: "Utilisateur créé !" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.login = async (req, res, next) => {
  // Je compare l'email de l'utilisateur avec celui de la requête
  const user = await sequelize.User.findOne({ email: req.body.email })
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
