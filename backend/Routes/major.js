import express from "express";
import product from "../models/product.js";
import Ad from "../models/ad.js";
import User from "../models/user.js";

const router = express.Router();

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    // Optional: Store the intended URL for redirect after login
    req.session.returnTo = req.originalUrl;
    return res.redirect("/login"); // You can also use res.status(401).send("Unauthorized") if it's an API
  }

const addProductToUser = async (userId, productId) => {
    try {
        let user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        user.products.push(productId);
        await user.save();
        console.log("Product added to user successfully!");
    } catch (error) {
        console.error("Error adding product to user:", error.message);
    }
};

// API Endpoints
router.get("/buy", async (req, res) => {
    try {
        const items = await product.find({});
        res.render("./layouts/buy.ejs",{items});
    } catch (e) {
        console.log(e);
        res.redirect("/home");
    }
});

router.get("/buy/:id",async(req,res)=>{
   let id=req.params.id;
   let item= await product.findById(id);
   res.render("./layouts/ind.ejs",{item});
});

//sell api
router.get("/sell",isLoggedIn,(req,res)=>{
    res.render("./layouts/sell.ejs");
})
router.post("/sell", async (req, res) => {
    try {
        const item = new product(req.body);
        await item.save();
        addProductToUser(req.user._id,item.id);
        res.redirect("/home")
    } catch (e) {
        console.log(e);
        res.redirect("/sell");
    }
});


//ad api
router.get("/ad",isLoggedIn,(req,res)=>{
    res.render("./layouts/ad.ejs");
});

router.post("/ad",async(req,res)=>{
    try {
        const item = new Ad(req.body);
        await item.save();
        res.redirect("/home")
    } catch (e) {
        console.log(e);
        res.redirect("/home");
    }
});

//rent api
router.get("/rent",async(req,res)=>{
    try {
        const items = await product.find({});
        res.render("./layouts/rent.ejs",{items});
    } catch (e) {
        console.log(e);
        res.redirect("/home");
    } 
});

router.get("/buy/:id",async(req,res)=>{
    let id=req.params.id;
    let item= await product.findById(id);
    res.render("./layouts/ind.ejs",{item});
 });
 

 router.get("/exchange",async(req,res)=>{
    try {
        const items = await product.find({});
        res.render("./layouts/exchange.ejs",{items});
    } catch (e) {
        console.log(e);
        res.redirect("/home");
    } 
});

router.get("/work",(req,res)=>{
    res.render("./layouts/work.ejs");
});




//search
router.get('/search', async (req, res) => {
    const { college, query } = req.query;

    try {
        const filter = {};

        // Filter by college if selected
        if (college) {
            filter.college = college;
        }

        // Search query across 'product' name and 'description'
        if (query) {
            filter.$or = [
                { product: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ];
        }

        const products = await product.find(filter);

        res.render('./layouts/search.ejs', { products });
        // Or use: res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

export default router;