const users = require('../models/users-model')
const bcrypt = require('bcryptjs')

module.exports = {
  getUsers: async (req, res) => {
    await users
      .find()
      .then(user => res.status(200).json(user))
      .catch(err =>
        res.status(500).json({ message: 'Failed to get users', error: err })
      )
  },
  
  //get a user
  getAUser: async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const userFind = userId
        ? await users.findById(userId)
        : await users.findOne({ username: username })
      const { password, updatedAt, ...other } = userFind._doc
      res.status(200).json(other)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  getUserById: async (req, res) => {
    await users
      .findById(req.params.id)
      .then(user => res.send(user))
      .catch(err =>
        res.status(500).json({ message: 'Failed to get users', error: err })
      )
  },
  getUserByEmail: async (req, res) => {
    await users
      .findOne(req.params.email)
      .then(user => res.send(user))
      .catch(err =>
        res.status(500).json({ message: 'Failed to get users', error: err })
      )
  },
  updateUser: async (req, res) => {
    //verifying if the user id match the parameter id
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      //if user trying to update password ? we generate a new hash password
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10)
          req.body.password = await bcrypt.hash(req.body.password, salt)
        } catch (error) {
          return res.status(500).json(error)
        }
      }
      try {
        // updating user password
        const user = await users.findByIdAndUpdate(req.params.id, {
          $set: req.body //set aouthomatcly all inputs
        })
        res.status(200).json({ message: 'Account has been updated' })
      } catch (err) {
        return res.status(500).json(error)
      }
    } else {
      return res
        .status(403)
        .json({ message: 'You can update only your Account' })
    }
  },
  deleteUser: async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        const user = await users.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Account has been delete' })
      } catch (err) {
        return res.status(500).json(err)
      }
    } else {
      return res
        .status(403)
        .json({ message: 'You can delete only your Account' })
    }
  },
  followUser: async (req, res) => {
    //here checking if they are same user or not if yes ? get status code 403
    if (req.body.userId !== req.params.id) {
      try {
        const user = await users.findById(req.params.id)
        const currentUser = await users.findById(req.body.userId)
        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } })
          await currentUser.updateOne({ $push: { followings: req.params.id } })
          res.status(200).json({ message: 'User as been follow' })
        } else {
          res.status(403).json({ message: 'You already follow this user' })
        }
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(403).json({ message: 'You cant follow yourself' })
    }
  }
  unFollowUser: async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await users.findById(req.params.id)
        const currentUser = await users.findById(req.body.userId)
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({ $pull: { followers: req.body.userId } })
          await currentUser.updateOne({ $pull: { followings: req.params.id } })
          res.status(200).json({ message: 'User as been unfollowed' })
        } else {
          res.status(403).json({ message: 'You dont follow this user' })
        }
      } catch (err) {
        res.status(500).json(err)
      }

  },
  getUser: async (req,res) =>{
    const userId= req.query.userId;
    const userName= req.query.userName;
    try{
      const user = userId?
      await users.findById(userId)
      : await users.findOne({userName:userName});
      const {password,updateAt,...other} = user._doc;
      res.status(200).json(other);
    }
    catch(err){
      res.status(500).json(err);

    } 
  }
}
}
