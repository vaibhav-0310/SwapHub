import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    college:{
        type:String,
        required:true,
    }
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
