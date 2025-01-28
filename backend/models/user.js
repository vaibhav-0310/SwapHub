import mongoose from "mongoose";
import passport from "passport";

let User=mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    batch:String,
    block:String,
});

let user=mongoose.model("user",User);

export default user;