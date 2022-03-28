const usersRouter = require('express').Router();
const userCtrl = require('../controllers/user-cntl');

usersRouter.get('/', userCtrl.getUsers);
usersRouter.get('/getByUserName', userCtrl.searchByUserName);

usersRouter.get('/:id', userCtrl.getUserById);
usersRouter.put('/:id',userCtrl.updateUser);
usersRouter.delete('/:id',userCtrl.deleteUser);
usersRouter.put('/:id/follow',userCtrl.followUser);
usersRouter.put('/:id/unfollow',userCtrl.unFollowUser);
usersRouter.get('/friends/:userId',userCtrl.getFriends);







module.exports =usersRouter;


