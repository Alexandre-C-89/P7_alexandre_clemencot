// J'importe express
const express = require("express");
// j'utilise la fonction router de express 
const router = express.Router();
// J'importe mon fichier authentification
const auth = require("../middleware/auth");

// J'importe mon fichier user
const userCtrl = require("../controllers/post");

// Ici je créer mes routes pour s'enregistré et ce connecté
router.post("/signup", postCtrl.createPost);
router.get("/", auth, postCtrl.getAllPost)
router.put("/:userId", userCtrl.modifyPost);
router.get("/:userId", auth, postCtrl.getOnePost)
router.delete("./:userId", auth, postCtrl.deletePost); 

module.exports = router;