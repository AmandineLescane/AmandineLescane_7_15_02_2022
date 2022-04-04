const models = require('../models');

//afficher les commentaires
exports.getAllComments = (req, res) => {
    models.Comment.findAll({
        include : [models.Post, models.User],
        where: {id: req.params.postId},
    })
    .then((comment)=> res.status(200).json({data : comment}))
    .catch(error => res.status(400).json({ error }));
}

//ajouter un commentaire
exports.createComment = (req, res) => {
    const comment = new models.Comment ({
        user : userId,
        post: postId, 
        content : req.body.content,
    });
    models.Comment.create(comment)
        .then(() => res.status(201).json({ message: "Commentaire ajouté ! " }))
        .catch(error => res.status(400).json({ error }));
};

//supprimer un commentaire
exports.deleteComment = (req, res) => {
    const userId = models.User.findOne({where : {id : req.params.id}});
    
    models.Comment.findOne({where: {id : req.params.id}})
    .then(() => {
        if(id === userId || req.token.isAdmin === true){
            models.Comment.destroy({
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
