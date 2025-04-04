import mongoose, {Schema} from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import product from "./product.js";

let userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    college:{
    type:String},
    picture:String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product",
    }]
    
});

userSchema.plugin(passportLocalMongoose);

let User=mongoose.model("user",userSchema);

export default User;