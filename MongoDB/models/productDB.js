import mongoose, {Schema} from "mongoose";

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
});

const productModel = mongoose.model("product", productSchema);

const productDoc = async() => {

    try{
        const p1 = new productModel({
            title: 'Macbook pro m5',
            description: 'powerful laptop for working',
            price: 1200,
            stock: 20,
            category: "Accessories",
            tags: ['256GB', '8GB'],
            isAvailable: true,
            reviews: {reviewer: 'Konfidence', comment: 'Accepted', rating: 3}
        })

        const result = await p1.save();
        console.log(result);

    }catch(error){
        console.log(error);
    }
}

export {productDoc}; 
