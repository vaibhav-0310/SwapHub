
import React, { useState } from "react";
import axios from "axios";

const Sell = () => {
    const [produc, setProduc] = useState({
        product: "",
        image: "",
        description: "",
        price: "",
        seller: "654321abcdef", // Replace with the logged-in seller's ID later
    });

    const handleChange = (e) => {
        setProduc({ ...produc, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/sell", produc);
            alert("Product listed successfully!");
            setProduc({ product: "", image: "", description: "", price: "", seller: "654321abcdef" });
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
                console.error("Server Response:", error.response.data); // Log server error response
                alert(`Error: ${error.response.data.message || "Failed to list product."}`);
            } else if (error.request) {
                console.error("No response received:", error.request);
                alert("No response from the server. Check if the backend is running.");
            } else {
                console.error("Error setting up request:", error.message);
                alert("Error setting up the request.");
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">List a Product</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <input 
                    type="text" 
                    name="product" 
                    placeholder="Product Name" 
                    value={produc.product} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded mb-3" 
                    required 
                />
                <input 
                    type="text" 
                    name="image" 
                    placeholder="Image URL" 
                    value={produc.image} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded mb-3" 
                    required 
                />
                <textarea 
                    name="description" 
                    placeholder="Description" 
                    value={produc.description} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded mb-3" 
                    required 
                />
                <input 
                    type="number" 
                    name="price" 
                    placeholder="Price" 
                    value={produc.price} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded mb-3" 
                    required 
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                    List Product
                </button>
            </form>
        </div>
    );
};

export default Sell;
