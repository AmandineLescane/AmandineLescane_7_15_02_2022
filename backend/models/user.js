const { Sequelize, DataTypes } = require('sequelize')
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
        allowNull : false
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
    avatar : {
        type: DataTypes.BLOB,
        default : {},
    },
    admin : {
        type: DataTypes.BOOLEAN,
        allowNull : false,
    },
});

User.hasMany(Comment);
User.hasMany(Post);

module.exports = User;