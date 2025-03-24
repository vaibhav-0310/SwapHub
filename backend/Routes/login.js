import express from "express";
import User from "../models/user.js";
import passport from "passport";

const router = express.Router();

// Password Strength Checker
const isStrongPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&#]/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasDigit &&
        hasSpecialChar
    );
};

// Signup Page
router.get("/signup", (req, res) => {
    res.render("./users/signup.ejs", { error: null });
});

// Sign-Up API
router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(req.body)

        if (!isStrongPassword(password)) {
            return res.render("./users/signup.ejs", {
                error: "Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.",
            });
        }

        const newUser = new User({ email, username });
        const reg = await User.register(newUser, password);

        req.login(reg, (err) => {
            if (err) {
                console.log("Unsuccessful login");
                return res.redirect("/login");
            }
            res.redirect("/home");
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// Login Page
router.get("/login", (req, res) => {
    res.render("./users/login.ejs");
});

// Login API
router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log(req.body);
    res.redirect("/home");
});

// Logout
router.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
    });
    res.redirect("/home");
});

export default router;
