module.exports = (Sequelize, DataTypes) => {
  Sequelize.define(
    "Post",
    {
      // Model attributes are defined here
      // Les attributs du model sont définit ici
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        // allowNull defaults to true
        // Par défaut allowNull est vrai
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "posts",
      timestamps: true,
      // Other model options go here
      // Autre option de model peuvent être placé ici
    }
  );
};
