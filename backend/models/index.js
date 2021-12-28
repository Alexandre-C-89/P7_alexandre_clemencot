// Connexion à ma BDD
const { config } = require("dotenv");
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
const user = require("./user")(sequelize, Sequelize.DataTypes);
const post = require("./post")(sequelize, Sequelize.DataTypes);

// user.hasMany(post, {
//   onUpdate: "CASCADE",
//   onDelete: "CASCADE",
// });

// post.belongsTo(user, {
//   foreignKey: {
//     allowNull: false,
//   },
// });

// création de "raccourcis"
Sequelize.User = user;
Sequelize.Post = post;


module.exports = sequelize;