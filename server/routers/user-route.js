const usersRouter = require('express').Router();
const userCtrl = require('../controllers/user-cntl');

usersRouter.get('/',userCtrl.getAUser);
usersRouter.get('/:id',userCtrl.getUserById);
usersRouter.put('/:id',userCtrl.updateUser);

usersRouter.put('/:email',userCtrl.getUserByEmail);

usersRouter.delete('/:id',userCtrl.deleteUser);
usersRouter.put('/:id/follow',userCtrl.followUser);
usersRouter.put('/:id/unfollow',userCtrl.unFollowUser);



module.exports =usersRouter;


