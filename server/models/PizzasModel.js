import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const pizzaSchema= new mongoose.Schema({
    name: String,
    image: String,
    price: Decimal128,
    description: String,
    last_price: Decimal128,
    currency: String,
});


export const Pizza = mongoose.model('Pizza', pizzaSchema);