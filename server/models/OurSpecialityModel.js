import mongoose from "mongoose";

const ourSpecialitySchema= new mongoose.Schema({
    image:  {
        type: String,
        required: true
    },
    type:  {
        type: String,
        required: true
    },
});


export const Speciality = mongoose.model('OurSpeciality', ourSpecialitySchema);