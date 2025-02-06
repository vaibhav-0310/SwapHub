import express from "express";
import Product from "../models/product.js";

const router = express.Router();

// 🛒 Add a New Product (Seller Listing)
router.post("/add", async (req, res) => {
    try {
        const { product, image, description, seller,  price, category } = req.body;

        const newProduct = new Product({
            product,
            image,
            description,
            seller, // Seller's ID (should come from authentication)
            
            price,
            category
        });

        await newProduct.save();
        res.status(201).json({ message: "Product listed successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ error: "Error listing product", details: error.message });
    }
});

// 🛍 Get All Products (For Buyers)
router.get("/", async (req, res) => {
    try {
        const products = await Product.find().populate("seller", "name email"); // Fetch seller info
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

export default router;
