require('dotenv').config();
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const bcrypt = require('bcrypt');
const models = require('../models');

//création de l'utilisateur
exports.signup = (req, res) => {
        const emailCrypt = cryptojs.SHA256(req.body.email, process.env.SECRET_TOKEN).toString();
        bcrypt
            .hash(req.body.password, 10)
            .then((hash) => {
                const user = models.User.create ({
                    name : req.body.name,
                    lastName : req.body.lastName,
                    email : emailCrypt,
                    password : hash,
                });
                user
                    .save()
                    .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
                    .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
}

//connexion de l'utilisateur
exports.login = (req, res) => {
    const emailCrypt = cryptojs.SHA256(req.body.email, process.env.SECRET_TOKEN).toString();
    
    models.User.findOne({ where : { email : emailCrypt }})
        .then((user) => {
            if(!user) {
                return res.status(401).json({message : "Utilisateur non trouvé!"});
            } 
            else {
                bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if(!valid) {
                        return res.status(401).json({message : "Mot de passe incorrect !"});
                    }
                    else {
                    res.status(200).json({
                        userId : user.id,
                        admin : user.isAdmin,
                        token: jwt.sign(
                            { userId: user.id },
                            process.env.SECRET_TOKEN,
                            { expiresIn: '24h' }
                            )
                    });
                    }
                })
                .catch(error => res.status(501).json({ error }));
            }
        })
        .catch(error => res.status(500).json({ error }));
};

//afficher compte utilisateur
exports.getOneUser = (req, res) => {
    models.User.findOne({ where : { id: req.params.id }})
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }));
};

//supprimer compte utilisateur
exports.deleteUser = (req, res) => {
    models.User.findOne({where: {id : req.params.id}})
    .then(()=> {
        User.destroy({where: {id : req.params.id}})
        .then(() => res.status(200).json({ message: "Compte utilisateur supprimé" }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch (error => res.status(500).json({ error }));
}
