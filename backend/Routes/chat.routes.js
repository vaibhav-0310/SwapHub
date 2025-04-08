import express from "express";
import product from "../models/product.js";
const router = express.Router();



router.get("/chat/:id", async (req, res) => {
    let id =req.params.id;
    let p = await   product.findById(id);
    res.render("./layouts/chat.ejs",{p});
});

export default router;
