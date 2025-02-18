import express from "express";
import User from "../models/user.js";
import passport from "passport";

const router = express.Router();

// Sign-Up API
router.post("/api/signup", async (req, res) => {
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
router.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({ message: "Login successful" });
});

router.get("/api/login",(req,res)=>{
     console.log("login succesfull");
     res.redirect("localhost5173/sell");
});

export default router;