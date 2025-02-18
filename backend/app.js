import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { Strategy as LocalStrategy } from "passport-local";
import product from "./models/product.js";
import User from "./models/user.js";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import { Strategy as Google } from "passport-google-oauth20";
import 'dotenv/config';
import major from "./Routes/major.js";
import login from "./Routes/login.js";
import googlelogin from "./Routes/googlelogin.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Port = process.env.PORT || 8080;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, "public")));


// Database Connection
const createDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1/SwapHub");
};

createDB()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

// Login Session

app.use(session({
    secret: "vsggykjhfdszghgjhgbfdxgfhgjhfgdrsetygfd",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }}));
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new Google({
       clientID: process.env.CLIENTID,
       clientSecret: process.env.CLIENT_SECRET,
       callbackURL: "http://localhost:8080/auth/google/callback",
   },
   (accessToken,refreshToken,profile,done)=>{
       return done(null,profile)
   }));
   passport.serializeUser((user,done)=> done(null,user));
   passport.deserializeUser((user,done)=>done(null,user));  
   passport.use(new LocalStrategy(User.authenticate()));
   passport.serializeUser(User.serializeUser());
   passport.deserializeUser(User.deserializeUser());
 



//All routes from Routes folder to check routes
app.use(major);
app.use(login);
app.use(googlelogin)



// Port Listening
app.listen(Port , () => {
    console.log("Server started");
});

