const postRouter = require('express').Router();
const {getAllPosts, getPostById,addPost,updatePost,deletePost,likePost,timelinePosts,usersAllPosts} = require('../controllers/post-cntl');

postRouter.get('/',getAllPosts);
postRouter.get('/:id',getPostById);
postRouter.post('/',addPost);
postRouter.put('/:id',updatePost);
postRouter.delete('/:id',deletePost);
postRouter.put('/id:/like',likePost);
// postRouter.get('/id:',getAPost);
postRouter.get('/timeline/:userId',timelinePosts);
postRouter.get('/profile/:userName',usersAllPosts);



module.exports = postRouter;