// j'importe express
const express = require("express");
// je stocke express dans une variable (app)
const app = express();
// j'importe path
const path = require("path");

// j'importe mes routes que j'utiliserais 
// par la suite
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

// les headers pour les différentes requêtes
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

// configuration de connection
var sequelize = new Sequelize(process.env.DATABASE /*'database'*/,process.env.USER /*'username'*/,process.env.PASSWORD /*'password'*/, {
  host: 'localhost',
  dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

module.exports = app;