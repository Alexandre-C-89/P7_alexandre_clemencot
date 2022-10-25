// J'importe Sequelize
const { Sequelize } = require("sequelize");
// J'importe dotenv
require("dotenv").config();

// J'utilise un modèle de Sequelize
// puis j'indique mes paramètre de connection
const sequelize = new Sequelize(
  /*database*/ /*process.env.BDD_NAME*/ "groupomania",
  /*username*/ /*process.env.BDD_USERNAME*/"root",
  /*password*/ /*process.env.PASSWORD*/"1234",
  {
    host: process.env.NET,
    dialect: "mysql",
    omitNull: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("je suis connecté à ma base de données : Groupomania !");
    sequelize
      .sync()
      .then((sync) => {
        console.log(" ------ modèles synchronisé ! ------");
      })
      .catch((error) => {
        console.log("impossible de synchronisé les modèles ! " + error);
      });
  })
  .catch((error) => {
    console.log("Not connected ! " + error);
  });

// J'exporte ma connexion à ma BDD
module.exports = sequelize;
