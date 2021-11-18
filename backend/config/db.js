const mysql = require("mysql");
const sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({

    host: "localhost",
 
    user: process.env.user,
 
    password: process.env.password
 
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
   db.query("CREATE DATABASE mabdd", function (err, result) {
        if (err) throw err;
        console.log("Base de données créée !");
    });
});

const sequelize = new sequelize("nom_base_de_donnees", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("SELECT eleves.id as 'eleve_id', eleves.nom as 'eleve_nom', eleves.cours_id, cours.nom as 'cours_nom', cours.date as 'cours_date' FROM eleves JOIN cours on eleves.cours_id = cours.id").then(([results, metadata]) => {
        console.log(results);
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
}