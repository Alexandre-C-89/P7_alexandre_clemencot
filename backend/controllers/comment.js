// J'importe mon fichier modèle de post
const Comment = require("../models/comment");
const Post = require("../models/post");
// J'importe mon fichier modèle utilisateur
// const User = require("../models/user");
// J'importe dotenv
require("dotenv").config();
// J'importe multer
const multer = require("multer");

// je gère la relation entre les utilisateurs et leurs posts

// Partie création de posts
exports.createComment = async (req, res, next) => {
  console.log("Vous avez l'intention de créer un commentaire !");
  const post = await Post.findOne({ where: { postId: req.params.id } }).then(
    (post) => {
      // Si la requête est correcte j'ai un status 201
      if (!post) {
        return res.status(401).json({ message: "post introuvable" });
      }
    }
  );
  // Je créer le commentaire avec la méthode "create"
  console.log(req.body);
  Comment.create({
    // Je renseigne les champs
    description: req.body.description,
    userId: req.body.userId,
    postId: req.params.id,
  })
    .then(() => {
      res.status(200).json({ message: "Commentaire ajouté !" });
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

// Affiché les commentaires
exports.getAllComment = async (req, res, next) => {
  const comment = await Comment.findAll();
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
