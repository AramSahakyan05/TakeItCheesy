import mongoose, { mongo } from "mongoose";

const pizzaReviewSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    reply_button: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

export const PizzaReview = mongoose.model('PizzaReview', pizzaReviewSchema);