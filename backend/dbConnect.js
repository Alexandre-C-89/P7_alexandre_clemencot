// J'importe Sequelize
const { Sequelize } = require("sequelize");


// J'utilise un modèle de Sequelize 
// puis j'indique mes paramètre de connection
const sequelize = new Sequelize(/*"database"*/ "groupomania", /*username*/"root", /*password*/ "1234", {
    host: "localhost",
    dialect: "mysql"
});

// Je teste si la connection est Ok ou non 
// try {
//     await sequelize.authenticate();
//     console.log(" Connection has been established successfully !");
// } catch(error) {
//     console.log("Unable to connect to the database: " + error);
// };
sequelize.authenticate().then(() => {
        console.log("Database Connected !");
    }).catch(error => {
        console.log("Not connected ! " + error);
    });


// J'exporte ma connexion à ma BDD
module.exports = sequelize;