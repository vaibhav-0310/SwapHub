//importing necessary files
import express from "express";
import mongoose from "mongoose";
import ejsmate from "ejs-mate";
import path from "path";
import {dirname} from "path";
import { fileURLToPath } from 'url';
import product from './models/product.js';


const app=express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
    app.engine("ejs",ejsmate);
    app.set("view engine","ejs");
    app.set("views",path.join(__dirname,"views"));
    app.use(express.urlencoded({extended:true}))
    app.use(express.static(path.join(__dirname,"/public")));

    //connection to db
    const createDB=async()=>{
    await mongoose.connect("mongodb://127.0.0.1/SwapHub");
};

createDB()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

//port listening
app.listen(8080,()=>{
    console.log("server started");
});


//home route
app.get("/",(req,res)=>{
    res.render("layouts/home.ejs");
});

//sell page
app.get("/sell",(req,res)=>{
     res.render("layouts/sell.ejs");
});

app.post("/sell",async (req,res)=>{
    try{
    console.log(req.body);
   const item= new product(req.body);
   await item.save();
   console.log("data saved");
    }
    catch(e){
        console.log(e);
    }
});