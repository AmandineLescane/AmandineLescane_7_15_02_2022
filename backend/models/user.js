const { DataTypes } = require('sequelize')
const sequelize = require("../app");
const Comment = require("./comment");
const Post = require ("./post");

const User = sequelize.define("User", {
    nom : {
        type: DataTypes.STRING,
        allowNull : false,
    },
    prenom : {
        type: DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type: DataTypes.STRING,
        allowNull : false,
        unique : true, 
    },
    password : {
        type: DataTypes.STRING,
        allowNull : false,
    },
    isAdmin : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
    }
});

module.exports = User;

User.hasMany(Comment);
User.hasMany(Post);

User.sync();