import mongoose, { Schema } from "mongoose";

//defining schema
const movieSchema = new mongoose.Schema({ //also works with const movieSchema = new Schema();
    name: {type: String, required: true, trim: true}, 
    ratings: {type: Number, required: true, min: 1, max: 5}, 
    money: {
        type: mongoose.Decimal128,
        required: true, 
        validate: v => v >= 10,
    }, 
    genre: {type: Array}, 
    isActive: {type: Boolean}, 
    comments: [{value: {type: String}, published: {type: Date, default: Date.now}}]
})
