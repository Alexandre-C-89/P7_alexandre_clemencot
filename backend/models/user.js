// J'importe sequelize
// const { Sequelize, DataTypes } = require("sequelize");

// module.exports = function(sequelize, DataTypes) {
//     const User = sequelize.define("User", {
//         username: {
//             type: DataTypes.STRING,
//         },
//         {
//             freezeTableName: true
//         }
//     });
//     return User;
// };

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pseudo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poste: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
};
// module.exports = User;