import mongoose from "mongoose";

const blogRecentPostsSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
export const RecentPosts = mongoose.model('RecentPosts', blogRecentPostsSchema);