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
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "build"))); // Serve React app

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

// Passport Strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Serve React App for all routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// API Endpoints
app.get("/api/buy", async (req, res) => {
    try {
        const items = await product.find({});
        res.json({ items });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



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
        const { username, email, password, block } = req.body;
        const newUser = new User({ email, username, block });
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

// Port Listening
app.listen(5000, () => {
    console.log("Server started on http://localhost:5000");
});