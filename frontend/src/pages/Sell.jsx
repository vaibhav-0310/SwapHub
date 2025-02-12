import React, { useState } from "react";
import axios from "axios";

const Sell = () => {
    const [product, setProduct] = useState({
        product: "",
        image: "",
        description: "",
        price: "",
        seller: "", 
        category:"",
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/sell", product);
            alert("Product listed successfully!");
            setProduct({ name: "", image: "", description: "", price: "" });
        } catch (error) {
            alert("Error listing product.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">List a Product</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <input type="text" name="product" placeholder="Product Name" value={product.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />
                <input type="text" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />
                <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />
                <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />
                <input type="text" name="seller" placeholder="Seller" value={product.seller} onChange={handleChange} className="w-full p-2 border rounded mb-3" required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">List Product</button>
            </form>
        </div>
    );
};

export default Sell;
