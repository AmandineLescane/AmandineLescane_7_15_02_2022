const { DataTypes } = require('sequelize')
const sequelize = require("../app");
const Comment = require("./comment");
const User = require("./user");

const Post = sequelize.define("Post", {
    title: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
    post_content: {
        type: DataTypes.TEXT,
        allowNull: false, 
    }, 
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    like:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Post;

Post.belongsTo(User);
Post.hasMany(Comment);

Post.sync();