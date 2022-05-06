const express = require('express');
const router = express.Router();

const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');

router.post('/:postId', auth, likeCtrl.likePost);
router.delete('/:postId', auth, likeCtrl.unlikePost);

module.exports = router;