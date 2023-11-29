import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const specialMenuSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Decimal128,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    global_type: {
        type: String,
        required: true
    },
    state: {
        type: Decimal128,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
});

export const SpecialMenu = mongoose.model('SpecialMenu', specialMenuSchema)