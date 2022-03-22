// Le fichier app.js gère l'application

// J'importe express
const express = require("express");
// J'importe path (à voir si je garde path)
// Path me donne accès au chemin de mon système de fichier
const path = require("path");
// J'importe mon fichier dbConnect
const db = require("./models/dbConnect");

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

// Je stocke express dans une variable "app"
const app = express();

// Ici, ce sont les headers (requêtes)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permet d'accéder à l'API depuis n'importe quelle origine
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); // chaque requête qui peuvent être effectué
  next();
});

// J'indique ou les images seront
// stocké
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
// app.use("/api/", limiter);
// app.use(helmet());

// app.use('/api/sauces', sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
