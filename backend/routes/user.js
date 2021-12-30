const express = require("express");
// j'utilise la méthode Router de express pour mes routes
const router = express.Router();

// Je stocke dans la variables userCtrl le
// chemin des fichiers de contrôle des utilisateurs (dossier controllers)
const userCtrl = require("../controllers/user");

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// Ici je créer mes routes pour concernant
// les utilisateurs
router.post("/login", auth, userCtrl.login);
router.post("/register", auth, multer,  userCtrl.createUser);
router.put("/login", userCtrl.modifyUser);
router.delete("/login", userCtrl.deleteUser);

module.exports = router;