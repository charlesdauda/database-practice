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

//creating model 
const MovieModel = mongoose.model('movie', movieSchema);

const createDoc = async () => {
    try {
        //creating new document 
       const m1 = new MovieModel({
            name: "Extraction",
            ratings: 3,
            money: 6000,
            genre: ['action', 'adventure'],
            isActive: true,
            comments: [{value: "That was Amazing"}]
        })

        const result = await m1.save(); 
        console.log(result);

    }catch(error){
        console.log(error);
    }
}

export { createDoc };
