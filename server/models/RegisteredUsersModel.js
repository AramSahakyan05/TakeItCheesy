import mongoose from 'mongoose';

const registeredUsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export const RegisteredUsers = mongoose.model('RegisteredUsers' , registeredUsersSchema)