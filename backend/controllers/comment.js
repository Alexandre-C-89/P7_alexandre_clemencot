// J'importe mon fichier modèle de post
const Comment = require("../models/comment");
// J'importe mon fichier modèle utilisateur
// const User = require("../models/user");
// J'importe dotenv
require("dotenv").config();
// J'importe multer
const multer = require("multer");

// je gère la relation entre les utilisateurs et leurs posts

// Partie création de posts
exports.createComment = (req, res, next) => {
  console.log("Vous avez l'intention de créer un commentaire !");
  // Je créer le post avec la méthode "create"
  // console.log();
  // console.log(req.file);
  console.log(Number(req.body.userId));
  Comment.create({
    // Je renseigne les champs
    title: req.body.title,
    description: req.body.description,
    UserId: Number(req.body.userId),
    PostId: Number(req.body.userId),
  })
    .then(() => {
      // Si la requête est correcte j'ai un status 201
      return res.status(200).json({ message: "Commentaire créé ! " });
    })
    .catch((error) => {
      console.log(error);
      // Si j'ai une erreur j'ai un status 401
      return res.status(401).json({
        message: "Impossible de créer le commentaire car il y a une erreur !",
      });
    });
};

// Affichage d'un post
exports.getOneComment = async (req, res, next) => {
  const comment = await Comment.findOne({
    where: { id: req.params.commentId },
  }); // Je cherche l'email de la requête avec celui enregistré
  if (comment) {
    res.status(200).json({ comment });
  } else {
    res.status(404).json({ message: "Commentaire non trouvé !" });
  }
};

// Suppression d'un post de l'utilisateur
exports.deleteComment = async (req, res, next) => {
  console.log("vous avez l'intention de supprimé un commentaire !");
  const comment = await Post.findOne({ where: { userId: req.body.userId } });
  if (comment) {
    Comment.destroy({ where: { userid: req.params.userId } });
    res.status(404).json({ message: "Commentaire supprimé !" });
  } else {
    res.status(401).json({ message: "Requête non autorisé !" });
  }
};
