// J'importe express
const express = require("express");
// j'utilise la fonction router de express
const router = express.Router();
// J'importe mon fichier authentification
const auth = require("../middleware/auth");
// J'importe multer
const multer = require("../middleware/multer-config");

// J'importe mon fichier user
const postCtrl = require("../controllers/post");

// Ici je créer mes routes pour s'enregistré et ce connecté
router.post("/createpost", multer, postCtrl.createPost);
router.get("/", postCtrl.getAllPost);
router.get("/:id", auth, postCtrl.getOnePost);
// router.put("/:postId", auth, multer, postCtrl.modifyPost);
router.delete("/deletePost", auth, postCtrl.deletePost);

module.exports = router;
