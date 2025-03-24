import express from "express";
import product from "../models/product.js";
import Ad from "../models/ad.js";

const router = express.Router();

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
router.get("/sell",(req,res)=>{
    res.render("./layouts/sell.ejs");
})
router.post("/sell", async (req, res) => {
    try {
        const item = new product(req.body);
        await item.save();
        res.redirect("/home")
    } catch (e) {
        console.log(e);
        res.redirect("/sell");
    }
});


//ad api
router.get("/ad",(req,res)=>{
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
 


export default router;