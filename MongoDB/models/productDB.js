import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    price: {type: mongoose.Decimal128, 
        required: true, min: 0
    },
    stock: {type: Number, required: true, min: 0},
    category: {type: String, required: true, trim: true},
    tags: {type: Array},
    isAvailable: {type: Boolean, default: true},
    reviews: [{reviewer: {type: String, required: true}, 
        comment: {type: String, required: true}, 
        rating: {type: Number, min: 1, max:5}}],
    createdAt: {type: Date, default: Date.now},
    publishedAt: {type: Date, default: Date.now}
})
const productModel = mongoose.model("product", productSchema);

export default productModel;
