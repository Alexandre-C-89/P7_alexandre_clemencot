const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // Je créer une constante à partir de la requête
    const token = req.headers.authorization.split(" ")[1]; // Je le split car il y a un espace
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // Je décode le token
    const userId = decodedToken.userId; // Je stock l'id d'écoder
    req.token = decodedToken;
    if (req.body.userId && req.body.userId !== userId) {
      throw "User ID non valable !";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée !" });
  }
};
