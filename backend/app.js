// j'importe express
const express = require("express");
// je stocke express dans une variable (app)
const app = express();
// j'importe path
const path = require("path");
// j'importe sequelize
const { Sequelize } = require("sequelize");

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
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

// Je test la connection au server
sequelize.authenticate()
  .then(function(err) {
    if (!!err) {
      console.log("Unable to connect to the database : ", err);
    } else {
      console.log("Connection has been established sucessfully ! ");
    }
  });

const db = require("./models/index");
db.sequelize.sync()
.then((sync) => {
  console.log("All models were synchronized successfully.");
})
.catch((error) => {
  console.log("Failed to synchronize the models");
});



app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

module.exports = app;