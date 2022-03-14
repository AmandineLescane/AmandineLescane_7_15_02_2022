const Sequelize = require("sequelize");
require("dotenv").config();
const db = {};

//création de la connection
sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: "localhost",
    dialect: "mysql",
}
);

//test de la connexion
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//Regroupement des dépendances circulaires des fichiers 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("../models/user")(sequelize, Sequelize.DataTypes);
db.Post = require("../models/post")(sequelize, Sequelize.DataTypes);
db.Comment = require("../models/comment")(sequelize, Sequelize.DataTypes);

db.User.associate(db);
db.Post.associate(db);
db.Comment.associate(db);

module.exports = db;