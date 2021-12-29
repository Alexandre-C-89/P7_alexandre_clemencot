// j'importe express
const express = require("express");
// je stocke express dnas ma variable app
const app = express();
require('dotenv').config();

// Ici je stocke dans une variables les fichiers
// de mes routes en allant les chercher
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

// Ici je créer mes headers pour 
// les requêtes et utilisations
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

// Connection à ma BDD avec sequelize
const db = require("./models/index");
db.sequelize.sync({alter: true, force: true})
.then((sync) => {
  console.log("All models were synchronized successfully.");
})
.catch((error) => {
  console.log("Failed to synchronize the models");
});

// J'utilise path pour indiqué ou les images doivent être enregistré
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

module.exports = app;