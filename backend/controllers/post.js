// J'importe mon fichier modèle de post
const Post = require("../models/post");
// J'importe mon fichier modèle utilisateur
const User = require("../models/user");
// J'importe dotenv
require("dotenv").config();
// J'importe sequelize
const sequelize = require("../dbConnect");

// je gère la relation entre les utilisateurs et leurs posts


// Partie création de posts
exports.createPost = (req, res, next) => {
    console.log("Vous avez l'intention de créer un post !");
    // Je stocke dans ma constante la requête de l'utilisateur
    const postObject = JSON.parse(req.body.post);
    // Je supprime l'underscore devant l'id 
    delete postObject._id;
    // Je créer le post avec la méthode "create"
    Post.create({
        // Je renseigne les champs 
        title: req.body.title,
        description: req.body.description,
        comment: req.body.comment,
        userId: postObject,
    })
    .then( // Si la requête est correcte j'ai un status 201
        res.status(200).json({ message: "Post créé ! "})
    )
    .catch((error) => {// Si j'ai une erreur j'ai un status 401
        res.status(401).json({ message: "Erreur lors de la création du post ! " + error})
    });
};

exports.modifyPost = (req, res, next) => {
    console.log("Vous avez l'intention de modifié un post !");
    // trouvé l'uitilisateur qui veut créer le post
    const findUser = User.findOne({where: { id:req.params.id }});
    // trouvé le post qui doit être modifié
    findPost = Post.findOne({ where: { userId:findUser } })
    // Je modifie le post si 
    if (findUser = findPost) {
        Post.update({ // Je crée mon utilisateur
            title: req.body.title,
            description: req.body.description,
            media: req.body.media,
        })
    }
};



// Partie sur l'affichage de tout les posts
exports.getAllPost = async (req, res, next) => {
    const post = await Post.findAll();
    if (post) {
        res.status(200).json({ post })
    } else {
        res.status(404).json({ message: "Voici les posts !" })
    }
};

// Affichage d'un post
exports.getOnePost = async (req, res, next) => {
    const post = await Post.findOne({ where: { id: req.params.userId } }) // Je cherche l'email de la requête avec celui enregistré
    if (post) {
        res.status(200).json({ post })
    } else {
        res.status(404).json({ message: "post trouvé !" })
    }
};

// Suppression d'un post de l'utilisateur
exports.deletePost = async (req, res, next) => {
    console.log("vous avez l'intention de supprimé un post !");
    const post = await Post.findOne({ where: { id: req.params.id } })
    if (post) {
        User.destroy({ where: { id: req.params.id }})
        res.status(404).json({ message: "Post supprimé !" })
    } else {
        res.status(401).json({ message: "Requête non autorisé !"})
    }
};

// foreignKey pour les posts
// User.belongsToMany(Post);