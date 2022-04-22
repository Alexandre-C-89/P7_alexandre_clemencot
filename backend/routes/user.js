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
router.post("/login", userCtrl.login);
router.get("/allUsers", auth.token, auth.adminUser, userCtrl.getAllUser);
// router.put("/:userId", userCtrl.modifyUser);
router.get("/:id", auth.token, userCtrl.getOneUser);
router.delete(
  "/deleteUser/:id",
  auth.token,
  auth.adminUser,
  userCtrl.deleteUser
);

module.exports = router;
