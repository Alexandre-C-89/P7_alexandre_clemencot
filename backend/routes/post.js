const express = require("express");
const router = express.Router();
 
const postCtrl = require("../controllers/post");
router.post("/post", postCtrl);

const post = sequelize.define("post", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    content: Sequelize.STRING(300)
});

post.associates = function(models) {
    post.belongsTo(models.user,{as: "user", foreignKey: "userId"})
}

module.exports = router;