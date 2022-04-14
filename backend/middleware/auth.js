const jwt = require("jsonwebtoken");
// J'importe dotenv
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    // Je créer une constante à partir de la requête
    console.log(" -------- Je vérifie l'utilisateur ! --------");
    // console.log(process.env.SECRET_KEY);
    console.log(req.headers.authorization, "token");
    const token = req.headers.authorization.split(" ")[1]; // Je le split car il y a un espace
    console.log(jwt.verify(token, process.env.SECRET_KEY));
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // Je décode le token
    const userId = decodedToken.userId; // Je stock l'id d'écoder
    console.log(userId, "userId");
    if (req.body.userId && req.body.userId !== userId) {
      throw "User ID non valable !";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée !" });
  }
};
