require('dotenv').config();
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const bcrypt = require('bcrypt');
const User = require('../models/user');

//création de l'utilisateur
exports.signup = (req, res) => {
        const emailCrypt = cryptojs.SHA256(req.body.email, process.env.SECRET_TOKEN).toString();
        //const image = `${req.protocol}://${req.get('host')}/images/profile/`
        bcrypt
            .hash(req.body.password, 10)
            .then((hash) => {
                const user = User.create ({
                    nom : req.body.nom,
                    prenom : req.body.prenom,
                    email : emailCrypt,
                    password : hash,
                    avatar : image,
                    admin : false,
                });
                user
                    .save()
                    .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
                    .catch((error) => res.status(401).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
}

//connexion de l'utilisateur
exports.login = (req, res) => {
    const emailCrypt = cryptojs.SHA256(req.body.email, process.env.SECRET_TOKEN).toString();
    
    User.findOne({ where : { email : emailCrypt }})
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
                        userId : user._id,
                        token: jwt.sign(
                            { userId: user._id },
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
    User.findOne({ where : { email : emailCrypt }})
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }));
};

//désactiver compte utilisateur
exports.deactivateUser = (req, res) => {
    User.update({
        nom : "anonyme",
        prenom : "utilisateur", 
    });
    user
        .save
        .then(() => res.status(200).json({ message: "Compte utilisateur désactivé" }));
}
