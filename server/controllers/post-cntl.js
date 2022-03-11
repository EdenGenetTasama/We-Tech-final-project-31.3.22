const posts = require('../models/posts-model');
const user = require('../models/users-model');

module.exports = {
  getAllPosts: async (req, res) => {
    await posts
      .find()
      .then(post => res.status(200).json(post))
      .catch(err => res.status(500).json(err))
  },
  getPostById: async (req, res) => {
    await posts
      .findById(req.params.id)
      .then(post => res.status(200).json(post))
      .catch(err => res.status(500).json(err))
  },
  addPost: async (req, res) => {
    await posts
      .create(req.body)
      .then(post =>
        res.status(200).json({ message: 'Post added successfully', post })
      )
  },
  updatePost: async (req, res) => {
    try {
      const post = await posts.findById(req.params.id)
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body })
        res.status(200).json({ message: 'The post as been updated' })
      } else {
        res.status(403).json({ message: 'you can update only your post' })
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },
  deletePost: async (req, res) => {
    try {
      const post = await posts.findById(req.params.id)
      if (post.userId === req.body.userId) {
        await post.deleteOne()
        res.status(200).json({ message: 'The post as been deleted' })
      } else {
        res.status(403).json({ message: 'you can delete only your post' })
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },
  likePost: async (req, res) => {
    try {
      const post = await posts.findById(req.params.id)
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } })
        res.status(200).json({ message: 'Post has been liked' })
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } })
        res.status(200).json({ message: 'Post has been disliked' })
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },
  getAPost: async (req, res) => {
    try {
      const post = await posts.findById(req.params.id)
      res.status(200).json()
    } catch (error) {
      res.status(500).json(err)
    }
  },
  timelinePosts: async (req, res) => {
    try {
      const currentUser = await user.findById(req.body.userId)
      const userPost = posts.find({ userId: currentUser._id })
      const friendsPost = await Promise.all(
        currentUser.followings.map((friendId) => {
          return posts.find({ userId: friendId })
        })
      );
    //   res.json(userPost.concat(...friendsPost))
      res.json({...friendsPost})
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
