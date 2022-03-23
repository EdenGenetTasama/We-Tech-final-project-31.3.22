const User = require('../models/users-model')
const bcrypt = require('bcryptjs')

module.exports = {
  getUsers: async (req, res) => {
    const userIdQ = req.query.userId
    const usernameQ = req.query.username

    try {
      const user = userIdQ
        ? await User.findById(userIdQ)
        : await User.findOne({ userName: usernameQ })
      const { password, updatedAt, ...other } = user._doc
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  getUserById: async (req, res) => {
    await User
      .findById(req.params.id)
      .then(user => res.status(200).json(user))
      .catch(err => res.status(500).json(err))
  },
  updateUser: async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10)
          req.body.password = await bcrypt.hash(req.body.password, salt)
        } catch (err) {
          return res.status(500).json(err)
        }
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body
        })
        res.status(200).json('Account has been updated')
      } catch (err) {
        return res.status(500).json(err)
      }
    } else {
      return res.status(403).json('You can update only your account!')
    }
  },
  deleteUser: async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('Account has been deleted')
      } catch (err) {
        return res.status(500).json(err)
      }
    } else {
      return res.status(403).json('You can delete only your account!')
    }
  },
  //get friends
  getFriends:async (req,res)=>{
     const theUser = await User.findById(req.params.userId);
     const userFriends=await Promise.all(
       theUser.followings.map(friendId=>{
         return User.findById(friendId)
       })
     )
     let friendsList = [];
     userFriends.map(friend=>{
       const {_id,userName,userLastName,profilePicture }= friend;
       friendsList.push({_id,userName,userLastName,profilePicture });
     });
     res.status(200).json(friendsList)
  },
  followUser: async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id)
        const currentUser = await User.findById(req.body.userId)
        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } })
          await currentUser.updateOne({ $push: { followings: req.params.id } })
          res.status(200).json('user has been followed')
        } else {
          res.status(403).json('you allready follow this user')
        }
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(403).json('you cant follow yourself')
    }
  },
  unFollowUser: async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id)
        const currentUser = await User.findById(req.body.userId)
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({ $pull: { followers: req.body.userId } })
          await currentUser.updateOne({ $pull: { followings: req.params.id } })
          res.status(200).json('user has been unfollowed')
        } else {
          res.status(403).json('you dont follow this user')
        }
      } catch (err) {
        res.status(500).json(err)
      }

    }
  
  }

}


