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

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
 
//google login
app.get("/auth/google", passport.authenticate('google', {scope: ['profile','email']}));

app.get(
   "/auth/google/callback",
   passport.authenticate('google', { failureRedirect: '/home' }),
   async (req, res) => {
     const googleProfile = req.user;
     const username = googleProfile.displayName;
     const email = googleProfile.emails[0].value;
 
       let user = await User.findOne({ email });
       if (!user) {  
         user = new User({
           username,
           email,
         });
         await user.save();
       }
       req.login(user, (err) => {
         if (err) return next(err);
         res.redirect("/home");
       });
     } 
 );


// API Endpoints
app.get("/api/buy", async (req, res) => {
    try {
        const items = await product.find({});
        res.send(items);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



//sell api
app.post("/api/sell", async (req, res) => {
    try {
        const item = new product(req.body);
        await item.save();
        res.status(201).json({ message: "Item added successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/api/donate", (req, res) => {
    res.json({ donate: "isTrue" });
});

// Sign-Up API
app.post("/api/signup", async (req, res) => {
    try {
        const { username, email, password} = req.body;
        const newUser = new User({ email, username});
        const reg = await User.register(newUser, password);
        req.login(reg, (err) => {
            if (err) {
                return res.status(500).json({ error: "Login failed" });
            }
            res.status(201).json({ message: "User registered successfully" });
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Login API
app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({ message: "Login successful" });
});

app.get("/api/login",(req,res)=>{
     console.log("login succesfull");
     res.redirect("localhost5173/sell");
});
// Port Listening
app.listen(8080, () => {
    console.log("Server started");
});

