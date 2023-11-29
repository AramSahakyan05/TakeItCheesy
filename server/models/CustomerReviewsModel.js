import mongoose from "mongoose";

const customerReviewsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    }
})

export const CustomerReviews = mongoose.model('CustomerReviews', customerReviewsSchema)