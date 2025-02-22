import express from "express";
import User from "../models/user.js";
import passport from "passport";

const router = express.Router();

// Sign-Up API
router.post("/api/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const reg = await User.register(newUser, password);

        req.login(reg, (err) => {
            if (err) {
                return res.status(500).json({ error: "Login failed" });
            }
            // Redirect to the frontend home page
            return res.json({ success: true, redirectUrl: "http://localhost:5173/" });
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// Login API
router.post("/api/login", passport.authenticate("local"), (req, res) => {
    return res.json({ success: true, redirectUrl: "http://localhost:5173/" });
});

export default router;