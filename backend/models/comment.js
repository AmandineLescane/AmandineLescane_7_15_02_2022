const { DataTypes } = require('sequelize')
const sequelize = require("../app");
const Post = require("./post");
const User = require("./user");

const Comment = sequelize.define("Comment", {
    comment_content: {
        type : DataTypes.TEXT,
        allowNull: false,
    },
})

Comment.belongsTo(Post);
Comment.belongsTo(User);

Comment.sync();