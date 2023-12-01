import mongoose from "mongoose";

const menuSchema= new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    image:  {
        type: String,
        required: true
    },
    first_ingredient:  {
        type: String,
        required: true
    },
    second_ingredient:  {
        type: String,
        required: true
    },
    third_ingredient:  {
        type: String,
        required: true
    },
    order_button:  {
        type: String,
        required: true
    },
    type:  {
        type: String,
        required: true
    },
});


export const Menu = mongoose.model('Menu', menuSchema);