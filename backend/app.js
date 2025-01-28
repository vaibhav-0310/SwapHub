//importing necessary files
import express from "express";
import mongoose from "mongoose";
import ejsmate from "ejs-mate";
import path from "path";
import {dirname} from "path";
import { fileURLToPath } from 'url';
import product from './models/product.js';
import user from "./models/user.js";
import passport from "passport";
import passportLocal from "passport";
import session from "express-session";
import cookieParser  from "cookie-parser";

//express starting
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

//login session

app.use(session({
    secret: "e1f17a5213a0d9d77652466dfd2e18f1662d45b6e81a3fe341748ed8a4036638",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }}));
    app.use(passport.initialize());
    app.use(passport.session());

   passport.use(new passportLocal(User.authenticate()));
   passport.serializeUser(user.serializeUser());
   passport.deserializeUser(user.deserializeUser());

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
   const item= new product(req.body);
   await item.save();
   res.redirect("/buy");
    }
    catch(e){
        console.log(e); 
    }
});

//buy page

app.get("/buy",async(req,res)=>{
    let item = await product.find({});
   res.render("layouts/buy.ejs",{item});
});

