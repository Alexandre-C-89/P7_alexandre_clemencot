const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize("SECRET_DB_NAME", "SECRET_USER_NAME", "SECRET_DB_PASSWORD", {
    host: "localhost",
    dialect: "mysql"
});

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    post: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    isAdmin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
    
  }, {
    timestamps: false,
    tableName: 'users'
});


module.exports = User;