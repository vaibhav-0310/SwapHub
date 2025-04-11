import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import ejsmate from "ejs-mate";
import { Strategy as LocalStrategy } from "passport-local";
import User from "./models/user.js";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import { Strategy as Google } from "passport-google-oauth20";
import 'dotenv/config';
import major from "./Routes/major.js";
import user from "./Routes/user.js";
import login from "./Routes/login.js";
import googlelogin from "./Routes/googlelogin.js";
import cors from "cors";
import Ad from "./models/ad.js";
import bodyParser from "body-parser";
import { createServer } from "http";
import { Server as SocketIO } from "socket.io";
import chat from "./Routes/chat.routes.js";
import Chat from "./models/chat.models.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Port = process.env.PORT || 8080;

const server = createServer(app);
const io = new SocketIO(server);
// Middlewares
app.engine("ejs",ejsmate);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Database Connection
const createDB = async () => {
    await mongoose.connect(process.env.ATLAS_DB);
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
       callbackURL: "https://swaphub-h3qp.onrender.com/auth/google/callback",
   },
   (accessToken,refreshToken,profile,done)=>{
       return done(null,profile)
   }));
  passport.serializeUser((user, done) => {
    done(null, user.id || user._id); 
  });
  passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

   passport.use(new LocalStrategy(User.authenticate()));
   
//local variable
    app.use(async (req, res, next) => {
        const currUser={};
        if (req.user) {
            try {
                res.locals.currUser=req.user;
            } catch (err) {
                console.error("Error fetching user:", err);
                res.locals.currUser = null;
            }
        } else {
            res.locals.currUser = null;
        }
        next();
    });
  

//All routes from Routes folder to check routes
app.use(major);
app.use(login);
app.use(googlelogin);
app.use(user);

app.get("/home",async(req,res)=>{
    let ads=await Ad.find({});
    res.render("./layouts/home.ejs",{ads});
});

app.get("/",async(reqq,res)=>{
   res.redirect("/home");
});

app.get("/why",(req,res)=>{
    res.render("./layouts/why.ejs");
});

// Port Listening
// Socket.io logic
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
  
    socket.on("chat message", async ({ message, productId, user }) => {
      // Save to DB
      const newMsg = new Chat({
        productId,
        user: user || "Anonymous",
        message,
      });
      await newMsg.save();
  
      // Broadcast to everyone
      io.emit("chat message", {
        message: newMsg.message,
        user: newMsg.user,
        productId: newMsg.productId,
      });
    });
  
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

app.use(chat);

server.listen(8080, () => {
    console.log(`Server started at http://localhost:8080`);
}); 

