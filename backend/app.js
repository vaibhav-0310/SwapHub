import express from "express";
import mongoose from "mongoose";
import ejsmate from "ejs-mate";
import path from "path";
import { fileURLToPath } from "url";
import { Strategy as LocalStrategy } from "passport-local"; 
import product from "./models/product.js";
import User from "./models/user.js";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";  // Import the CORS package

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.engine("ejs", ejsmate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

// CORS setup
app.use(cors({
    origin: "http://localhost:5173", // Frontend origin (React is running on port 5173)
    methods: ["GET", "POST"],  // Allow these methods
    allowedHeaders: ["Content-Type"], // Allow these headers
}));

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
app.use(
    session({
        secret: "e1f17a5213a0d9d77652466dfd2e18f1662d45b6e81a3fe341748ed8a4036638",
        resave: false,
        saveUninitialized: true,
        cookie: {
            expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Correct Passport Strategy Usage
passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Port Listening
app.listen(8080, () => {
    console.log("Server started");
});

// Routes
app.get("/", (req, res) => {
    res.render("layouts/home.ejs");
});

app.get("/sell", (req, res) => {
    res.render("layouts/sell.ejs");
});

app.post("/sell", async (req, res) => {
    try {
        const item = new product(req.body);
        await item.save();
        res.redirect("/buy");
    } catch (e) {
        console.log(e);
    }
});

app.get("/buy", async (req, res) => {
    let item = await product.find({});
    res.render("layouts/buy.ejs", { item });
});

// Sign-Up Page
app.get("/signup", (req, res) => {
    res.render("Users/signup.ejs");
});

app.post("/signup", async (req, res) => {
    try {
        let { username, email, password, block } = req.body;
        let newUser = new User({ email, username, block });
        console.log(newUser);
        let reg = await User.register(newUser, password);
        req.login(reg, (err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/sell"); // Redirect to be changed later
        });
    } catch (e) {
        console.log(e);
    }
});


//login route
app.get("/login",(req,res)=>{
     res.render("users/login.ejs");
});

app.post("/login",passport.authenticate("local", {
    failureRedirect: "/login", 
    failureFlash: true
  }),(req,res)=>{
    try{
    res.redirect("sell"); // to be changed later
    }
    catch(e){
        console.log(e);
    }
  });
