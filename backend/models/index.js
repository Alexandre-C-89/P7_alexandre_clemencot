// Connexion à ma BDD
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.BDD_NAME,
  process.env.BDD_USER,
  process.env.BDD_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Je vais chercher mes fichiers de models
const user = require("./user")(sequelize, Sequelize.Datatypes);
const post = require("./post")(sequelize, Sequelize.Datatypes);

user.hasMany(post, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

post.belongsTo(user, {
  foreignKey: {
    allowNull: false,
  },
});

// création de "raccourcis"
sequelize.User = user;
sequelize.Post = post;

sequelize
  .authenticate()
  .then((connexion) => {
    console.log("✅ Connexion à MySQL");
    sequelize
      .sync()
      .then((sync) => {
        console.log("All models were synchronized successfully.");
      })

      .catch((error) => {
        console.log("Failed to synchronize the models");
      });
  })
  .catch((error) => {
    console.log("❌ Connexion à MySQL", error);
  });

module.exports = sequelize;
