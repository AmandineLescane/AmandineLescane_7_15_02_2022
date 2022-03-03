const User = require('../models/user');
const Post = require('../models/post');
const Comment = require("../models/comment");

//afficher les commentaires
exports.getAllComments = (req, res) => {
    Comment.findAll({
        include:{
            Post,
            User,
        },
        where: {id: req.params.postId},
    })
    .then((comment)=> res.status(200).json(comment))
    .catch(error => res.status(400).json({ error }));
}

//ajouter un commentaire
exports.createComment = (req, res) => {
    const comment = new Comment ({
        user : userId,
        post: postId, 
        content : req.body.content,
    });
    Comment.create(comment)
        .then(() => res.status(201).json({ message: "Commentaire ajouté ! " }))
        .catch(error => res.status(400).json({ error }));
};

//supprimer un commentaire
exports.deleteComment = (req, res) => {
    const userId = User.findOne({where : {id : req.params.id}});
    
    Comment.findOne({where: {id : req.params.id}})
    .then(() => {
        if(id === userId || req.token.isAdmin === true){
            Comment.destroy({
                where: {id : req.params.id},
            })
            .then(() => res.status(200).json({ message: "Commentaire supprimé !"}))
            .catch(error => res.status(400).json({ error }));
        } else {
            res.status(401).json({ error });
        }
    })
    .catch(error => res.status(400).json({ error }));
}
