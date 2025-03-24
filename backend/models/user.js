import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

let userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    college:{
    type:String},
    picture:String,
});

userSchema.plugin(passportLocalMongoose);

let User=mongoose.model("user",userSchema);

export default User;