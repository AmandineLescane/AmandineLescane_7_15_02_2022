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
    port: 3306,
}
);

//test de la connexion
try {
    sequelize.authenticate();
    console.log('Connexion réussie !');
} catch (error) {
    console.error('Erreur lors de la connexion', error);
}

//Regroupement des dépendances circulaires des fichiers 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize.DataTypes);
db.Post = require("./post")(sequelize, Sequelize.DataTypes);
db.Comment = require("./comment")(sequelize, Sequelize.DataTypes);

db.User.associate(db);
db.Post.associate(db);
db.Comment.associate(db);

module.exports = db;