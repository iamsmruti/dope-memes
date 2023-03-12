import mongoose from "mongoose";

const memeSchema = mongoose.Schema({
    caption: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const MemePost = mongoose.model('MemePost', memeSchema)
export default MemePost

