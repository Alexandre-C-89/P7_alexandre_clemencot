// const { Sequelize, DataTypes } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postId: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    });
}

// module.exports = Post;