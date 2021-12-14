const { Sequelize } = require("sequelize");

const sequelize = new Sequelize ("formationsql", "root", "", {
    dialect: "mysql",
    host: "localhost",
    password: ""
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
    console.log({ message: "erreur lors de la connection !" + error});
}

try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("SELECT eleves.id as 'eleve_id', eleves.nom as 'eleve_nom', eleves.cours_id, cours.nom as 'cours_nom', cours.date as 'cours_date' FROM eleves JOIN cours on eleves.cours_id = cours.id").then(([results, metadata]) => {
        console.log(results);
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }