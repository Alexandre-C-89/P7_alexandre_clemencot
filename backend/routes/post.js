// J'importe express
const express = require("express");
// j'utilise la fonction router de express 
const router = express.Router();
// J'importe mon fichier authentification
const auth = require("../middleware/auth");

// J'importe mon fichier user
const postCtrl = require("../controllers/post");

// Ici je créer mes routes pour s'enregistré et ce connecté
router.post("/", auth, postCtrl.createPost);
router.get("/", auth, postCtrl.getAllPost);
router.get("/:userId", auth, postCtrl.getOnePost);
router.put("/:userId", auth, postCtrl.modifyPost);
router.delete("./:userId", auth, postCtrl.deletePost); 

module.exports = router;