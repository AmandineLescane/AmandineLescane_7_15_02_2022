const fs = require ('fs');
const { post } = require('../app');
const Post = require('../models/post');
const User = require('../models/user');

//création d'un post
exports.createPost = (req,res) => {
    const post = new Post ({
        user: userId,
        title: req.body.title,
        content: req.bdoy.content,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Post publié !'}))
        .catch(error => res.status(400).json({ error }));
}

//suppression d'un post
exports.deletePost = (req, res) => {
    const userId = User.findOne({where : {id : req.params.id},})

    Post.findOne({where: {id : req.params.id}})
    .then(() => {
        if(id === userId || req.token.isAdmin === true){
        Post.destroy({
            where : {id : req.params.id},
            })
            .then(() => res.status(200).json({ message: 'Post supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        } else {
            res.status(401).json({ error });
        }
    })
    .catch(error => res.status(400).json({ error }));
}

//affichage des posts
exports.getAllPosts = (res) => {
    Post.findAll({
        include: [Comment, User],
    })
        .then((post)=> res.status(200).json(post))
        .catch(error => res.status(400).json({ error }));
};