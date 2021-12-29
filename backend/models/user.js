module.exports = (Sequelize, DataTypes) => {
  Sequelize.define(
    "User",
    {
      // Model attributes are defined here
      // Les attributs du model sont définit ici
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
      },
      email: {
        type: DataTypes.STRING,
        require: true,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        require: true,
      },
    },
    {
      tableName: "users",
      timestamps: true,
      // Other model options go here
      // Autre option de model peuvent être placé ici
    }
  );
};
