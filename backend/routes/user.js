// J'importe express
const express = require("express");
// j'utilise la fonction router de express
const router = express.Router();
// J'importe mon fichier authentification
const auth = require("../middleware/auth");

// J'importe mon fichier user
const userCtrl = require("../controllers/user");

// Ici je créer mes routes pour s'enregistré et ce connecté
router.post("/signup", userCtrl.signup);
router.post("/login", auth, userCtrl.login);
router.get("/allUsers", auth, userCtrl.getAllUser);
// router.put("/:userId", userCtrl.modifyUser);
router.get("/", auth, userCtrl.getOneUser);
router.delete("/deleteUser/:userId", auth, userCtrl.deleteUser);

module.exports = router;
