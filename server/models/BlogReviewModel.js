import mongoose from "mongoose";

const blogSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image:  {
        type: String,
        required: true
    },
    review:  {
        type: String,
        required: true
    },
    reply_button:  {
        type: String,
        required: true
    },
});


export const BlogReview = mongoose.model('Blog', blogSchema);