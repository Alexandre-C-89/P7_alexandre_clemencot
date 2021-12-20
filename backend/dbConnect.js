const Sequelize = require("sequelize");

const db = new Sequelize("SECRET_DB_NAME", "SECRET_USER_NAME", "SECRET_DB_PASSWORD", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = db;