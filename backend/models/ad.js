import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    poster: {
        type: String, // Changed to a direct string for easier access
        required: true
    },
    description: {
        type: String,
        required: true
    },
    PostedBy: {
        type: String,
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

const Ad = mongoose.model("ad", adSchema);
export default Ad;
