// j'utilise express
const express = require("express");
// j'utilise la méthode Router de express pour mes routes
const router = express.Router();

// Je stocke dans la variables userCtrl le 
// chemin des fichiers de contrôle des utilisateurs (dossier controllers) 
const userCtrl = require("../controllers/user");

// Ici je créer ma routes pour l'enregistrements
// des utilisateurs
router.post("/signup", userCtrl.signup);
// Ici je créer ma routes pour la connexion
// des utilisateurs
router.post("/login", userCtrl.login);

module.exports = router;