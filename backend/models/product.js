import mongoose from "mongoose";

let Product = new mongoose.Schema({
    product: {
        type:String,
        required:true
    },
    image: {
        url:String,
    },
    seller: String,
    college:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
});

let product= mongoose.model("product",Product);


export default product;

