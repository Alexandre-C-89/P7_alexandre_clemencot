// const mysql = require("mysql2");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize ("formationsql", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

try {
    const connection = sequelize.authenticate();
    if (connection) {
        console.log("Vous êtes connectez à la base de données !");
    }
    sequelize.query("SELECT * FROM utilisateurs ").then((results) => {
        console.log(results);
    })
} catch (error) {
    console.log(error);
    // console.log({ message: "erreur lors de la connection !" + error});
}