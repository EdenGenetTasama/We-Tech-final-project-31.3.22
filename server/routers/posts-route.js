const postRouter = require('express').Router();
const {getAllPosts, getPostById,addPost,updatePost,deletePost,likePost} = require('../controllers/post-cntl');

postRouter.get('/',getAllPosts)
postRouter.get('/:id',getPostById)
postRouter.post('/',addPost)
postRouter.put('/:id',updatePost)
postRouter.delete('/:id',deletePost)
postRouter.put('/:id/like',likePost)



module.exports = postRouter;