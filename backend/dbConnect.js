// J'importe Sequelize
const { Sequelize } = require("sequelize");


// J'utilise un modèle de Sequelize 
// puis j'indique mes paramètre de connection
const sequelize = new Sequelize("database", "username", "password", {
    host: "localhost",
    dialect: "mysql"
});

// Je teste si la connection est Ok ou non 
try {
    await sequelize.authenticate();
    console.log(" Connection has been established successfully !");
} catch(err) {
    console.log("Unable to connect to the database: " + err);
};

module.exports = Sequelize;