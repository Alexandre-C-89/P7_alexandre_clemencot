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
            type: DataTypes.UUID,
            primaryKey: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true,
            len:[7, 100],
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        update_at: {
            type: DataTypes.DATE,
        },
        delete_at: {
            type: DataTypes.DATE,
        },
    },
        {
            undescored: true,
            paranoid:true
        }
    );
};
// module.exports = User;