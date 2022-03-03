require('dotenv').config();
const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const mysql = require('mysql2');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const likeRoutes = require('./routes/like');

app.use(express.json());
app.use(helmet());

//en têtes HTTP CORS (cross origin ressources sharing)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
    next();
});

//connexion à la base de données
const sequelize = new Sequelize (process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host : "localhost",
    dialect : "mysql",
});

//test de la connexion
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//routes
app.use('api/user', userRoutes);
app.use('api/post', postRoutes);
app.use('api/post', likeRoutes);
app.use('api/comment', commentRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;

