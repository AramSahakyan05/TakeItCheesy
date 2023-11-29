import mongoose from "mongoose";

const latestNewsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    by: {
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
    read_more_button: {
        type: String,
        required: true
    }
})

export const LatestNews = mongoose.model('LatestNews', latestNewsSchema);