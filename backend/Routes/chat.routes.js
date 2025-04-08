import express from "express";
import product from "../models/product.js";
import Chat from "../models/chat.models.js";

const router = express.Router();
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    // Optional: Store the intended URL for redirect after login
    req.session.returnTo = req.originalUrl;
    return res.redirect("/login"); // You can also use res.status(401).send("Unauthorized") if it's an API
  }

router.get("/chat/:id",isLoggedIn, async (req, res) => {
  let id = req.params.id;
  let p = await product.findById(id);
  let messages = await Chat.find({ productId: id }).sort({ createdAt: 1 });

  res.render("./layouts/chat.ejs", { p, messages });
});

export default router;
