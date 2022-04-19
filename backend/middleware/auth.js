const jwt = require("jsonwebtoken");
// J'importe dotenv
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    // Je créer une constante à partir de la requête
    console.log(" -------- Je vérifie l'utilisateur ! --------");
    const token = req.headers.authorization.split(" ")[1]; // Je le split car il y a un espace
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // Je décode le token
    const userId = decodedToken.userId; // Je stock l'id d'écoder
    // console.log(User.isAdmin);
    if (req.body.userId && req.body.userId !== userId) {
      // Si l'utilisateur n'est pas admin
      // alors je renvoi une erreur
      if (req.body.isAdmin != 1) {
        throw "User ID non valable !";
      }
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée !" });
  }
};
