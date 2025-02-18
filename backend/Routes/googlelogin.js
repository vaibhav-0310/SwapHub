import express from "express";
import { Strategy as Google } from "passport-google-oauth20";
import passport from "passport";
import 'dotenv/config';
import User from "../models/user.js";

const router=express.Router();

//google login
router.get("/auth/google", passport.authenticate('google', {scope: ['profile','email']}));

router.get(
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

 export default router;