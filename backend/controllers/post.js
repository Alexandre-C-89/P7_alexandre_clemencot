const Post = require("../models/post");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createPost = async (req, res, next) => {
  try {
    // je récupère le token, je le décode et j'intègre le userId
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.userId;
    // j'identifie l'utilisateur
    const user = await sequelize.User.findOne({ where: { id: userId } });
    const newPost = new Post({
      // Je modifie le champ image
      ...req.body,
      image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    });
    const sendPost = await sequelize.Post.create({ newPost });
    res.status(201).json({ post: sendPost, message: "post créer !" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.modifyPost = async (req, res, next) => {
  const post = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Post.updateOne({ _id: req.params.id }, { ...post, _id: req.params.id })
    .then(() => res.status(200).json({ message: "post modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteOnePost = (req, res, next) => {};

exports.getOnePost = async (req, res, next) => {
  Post.findOne({
    _id: req.params.id,
  })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.getAllPost = async (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.likePost = async (req, res, next) => {
  const userId = req.body.userId;
  const like = req.body.like;
  const postId = req.params.id;
  Post.findOne({ _id: postId })
    .then((post) => {
      // nouvelles valeurs à modifier
      const newValues = {
        usersLiked: post.usersLiked,
        usersDisliked: post.usersDisliked,
        likes: 0,
        dislikes: 0,
      };
      // Différents cas:
      switch (like) {
        // avant d'effectuer les actions tu vérifie si avant dans le tableau
        case 1: // CAS: sauce liked
          if (newValues.usersLiked.includes(userId)) {
            // si on annule le like
            const index = newValues.usersLiked.indexOf(userId);
            newValues.usersLiked.splice(index, 1);
          } else {
            newValues.usersLiked.push(userId);
          }
          break;
        case -1: // CAS: sauce disliked
          if (newValues.usersDisliked.includes(userId)) {
            // si on annule le dislike
            const index = newValues.usersDisliked.indexOf(userId);
            newValues.usersDisliked.splice(index, 1);
          } else {
            newValues.usersDisliked.push(userId);
          }
          break;
        case 0: // CAS: Annulation du like/dislike
          if (newValues.usersLiked.includes(userId)) {
            // si on annule le like
            const index = newValues.usersLiked.indexOf(userId);
            newValues.usersLiked.splice(index, 1);
          }
          if (newValues.usersDisliked.includes(userId)) {
            // si on annule le dislike
            const index = newValues.usersDisliked.indexOf(userId);
            newValues.usersDisliked.splice(index, 1);
          }
          break;
      }
      // Calcul du nombre de likes / dislikes
      newValues.likes = newValues.usersLiked.length;
      newValues.dislikes = newValues.usersDisliked.length;
      // Mise à jour de la sauce avec les nouvelles valeurs
      Post.updateOne({ _id: postId }, newValues)
        .then(() => res.status(200).json({ message: "post notée !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
