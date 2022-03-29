const posts = require('../models/posts-model')
const user = require('../models/users-model')

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
      .catch(err => res.status(500).json(err))
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
      if (post.userId == req.body.id) {
        await post.deleteOne()
        res.status(200).json({ message: 'The post as been deleted' })
      } else {
        console.log(req.body)
        res.status(403).json({ message: 'you can delete only your post' })
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },
  likePost: async (req, res) => {
    try {
      const Post = await posts.findById(req.params.id)
      if (!Post.likes.includes(req.body.userId)) {
        await Post.updateOne({ $push: { likes: req.body.userId } })
        res.status(200).json('The post has been liked')
      } else {
        await Post.updateOne({ $pull: { likes: req.body.userId } })
        console.log(Post)
        res.status(200).json('The post has been disliked')
      }
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  //Get timeline post
  timelinePosts: async (req, res) => {
    try {
      const currentUser = await user.findById(req.params.userId)
      const userPost = await posts.find({ userId: currentUser._id })
      const friendsPost = await Promise.all(
        currentUser.followings.map(friendId => {
          return posts.find({ userId: friendId })
        })
      )
      res.status(200).json(userPost.concat(...friendsPost))
    } catch (error) {
      res.status(500).json(error)
    }
  },

  //Get users allpost
  usersAllPosts: async (req, res) => {
    try {
      const userByName = await user.findOne({ userName: req.params.userName })
      const postsByIdUser = await posts.find({ userId: userByName._id })
      res.status(200).json(postsByIdUser)
    } catch (error) {
      res.status(400).json(error)
    }
  },

  addComment: async (req, res) => {
    try {
      const Post = await posts.findById(req.params.id)
      const currentUser = await user.findById(req.body.userId)
      if (!Post.comments.includes(req.body.userId)) {
        await Post.updateOne({
          $push: { comments: req.body, userId: posts.userId }
        })
        res.status(200).json('The comments has been post')
      } else {
        await Post.updateOne({
          $pull: { comments: req.body, userId: posts.userId }
        })
        res.status(200).json('The comments has been unposed')
      }
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}
