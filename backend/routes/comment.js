// J'importe express
const express = require("express");
// j'utilise la fonction router de express
const router = express.Router();
// J'importe mon fichier authentification
const auth = require("../middleware/auth");

// J'importe mon fichier user
const commentCtrl = require("../controllers/comment");

// Ici je créer mes routes pour s'enregistré et ce connecté
router.post("/:id/createcomment", commentCtrl.createComment);
router.get("/:id", commentCtrl.getAllComment);

module.exports = router;
