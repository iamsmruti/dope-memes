import mongoose from 'mongoose'
import MemePost from '../models/MemePost.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await MemePost.find()

        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body

    const newPost = new MemePost(post)
    try {
        await newPost.save() 
        res.status(200).json(newPost)
    } catch (err) {
        res.status(409).json({ message : err.message})
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params

    if( !mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that ID")
    const post = await MemePost.findById(_id)
    const updatedPost = await MemePost.findByIdAndUpdate(_id, post, {new : true})

    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const {id: _id} = req.params

    if( !mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that ID")

    await MemePost.findByIdAndDelete(_id)
    res.json({message: "Post deleted Successfully"})
}

export const likePost = async (req, res) => {
    const { id: _id } = req.params

    if( !mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that ID")

    const post = await MemePost.findById(_id)
    const updatedPost = await MemePost.findByIdAndUpdate(_id, {likeCount: (post.likeCount + 1) }, {new : true})

    res.json(updatedPost)
}