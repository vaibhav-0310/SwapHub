import express from "express";
import { Strategy as Google } from "passport-google-oauth20";
import passport from "passport";
import 'dotenv/config';
import User from "../models/user.js";

const router=express.Router();

//google login
router.get("/auth/google", passport.authenticate('google', {scope: ['profile','email']}));

router.get("/auth/google/callback",
   passport.authenticate('google', { failureRedirect: '/home' }),
   async (req, res) => {
     const googleProfile = req.user;
     const username = googleProfile.name.givenName;
     const email = googleProfile.emails[0].value;
     const college=googleProfile._json.hd || 'not specified';
     const picture= googleProfile.photos[0].value || "NA";

       let user = await User.findOne({ email });
       if (!user) {  
         user = new User({
           username,
           email,
           college,
           picture,
         });
         await user.save();
       }
       req.login(user, (err) => {
         if (err) return next(err);
         res.redirect(`/dashboard/${username}`);
       });
     } 
 );

 export default router;