const mysql = require("mysql");
const sequelize = require("sequelize");

const db = mysql.createConnection({

    host: "localhost",
 
    user: "root",
 
    password: ""
 
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
   db.query("CREATE DATABASE mabdd", function (err, result) {
        if (err) throw err;
        console.log("Base de données créée !");
    });
});

const sequelize = new Sequelize("nom_base_de_donnees", "root", "", {
    dialect: "mysql",
    host: "localhost"
});