// J'importe Sequelize
const { Sequelize } = require("sequelize");

// J'utilise un modèle de Sequelize
// puis j'indique mes paramètre de connection
const sequelize = new Sequelize(
  /*database*/ "groupomania",
  /*username*/ "root",
  /*password*/ "1234",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("je suis connecté à ma base de données : Groupomania !");
    sequelize
      .sync()
      .then((sync) => {
        console.log("modèles synchronisé !");
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
