import express from "express";
import product from "../models/product.js";

const router = express.Router();

// API Endpoints
router.get("/api/buy", async (req, res) => {
    try {
        const items = await product.find({});
        res.send(items);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



//sell api
router.post("/api/sell", async (req, res) => {
    try {
        const item = new product(req.body);
        await item.save();
        res.status(201).json({ message: "Item added successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/api/donate", (req, res) => {
    res.json({ donate: "isTrue" });
});


export default router;
