import mongoose from "mongoose";

const bestChefSchema= new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    image:  {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    }
});


export const BestChef = mongoose.model('BestChef', bestChefSchema);