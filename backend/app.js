const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
// Utilisation de body-parser qui lit l'entrée d'un formulaire
// et le stocke en tant qu'objet javascript accessible via req.body

const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permet d'accéder à mon API depuis n'importe quelle origine
  res.setHeader(
    "Access-Control-Allow-Origin",
    "Origin, X-Requested-With, content, Accept, Content-Type, Atuthorization"
  );
  // J'ajoute les headers mentionnés aux requêtes envoyées vers notre API
  res.setHeader(
    "Access-Control-Allow-Origin",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


// J'utilise path pour indiqué ou les images doivent être enregistré
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

module.exports = app;
