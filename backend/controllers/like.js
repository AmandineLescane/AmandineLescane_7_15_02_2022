const User = require('./user');
const Post = require('./post');

//ajouter un like et enlever un like 
exports.like = (req, res) => {
    const postId = Post.findOne({where: {id : req.params.id},});
    const userId = User.findOne({where: {id: req.params.id}});
    const userLiked = Post.findOne({where : {userId, postId}});
    
    if(req.body.like === 1){
        Post.increment({
            like : -1,
        },
        { where: {
            userLiked
        }})
        .then(() => res.status(200).json({ message: 'Like supprimé !'}))
        .catch(error => res.status(400).json({ error }));
    } else {
        Post.increment({
            like: +1,
        },
        { where: {
            userLiked
        }})
        .then(() => res.status(200).json({ message: 'Like ajouté !'}))
        .catch(error => res.status(400).json({ error }));
    }
}