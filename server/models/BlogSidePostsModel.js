import mongoose from "mongoose";

const blogSidePostsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
export const BlogSidePosts = mongoose.model('BlogSidePosts', blogSidePostsSchema);