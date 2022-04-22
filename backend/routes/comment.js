// J'importe express
const express = require("express");
// j'utilise la fonction router de express
const router = express.Router();
// J'importe mon fichier authentification
const auth = require("../middleware/auth");

// J'importe mon fichier user
const commentCtrl = require("../controllers/comment");

// Ici je créer mes routes pour s'enregistré et ce connecté
router.post("/createcomment", commentCtrl.createComment);
// router.get("/", postCtrl.getAllComment);
router.get("/:id", auth.token, commentCtrl.getOneComment);
// router.put("/:postId", auth, multer, postCtrl.modifyPost);
router.delete("/deletePost", auth.token, commentCtrl.deleteComment);

module.exports = router;
