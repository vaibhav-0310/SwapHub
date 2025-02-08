import React, { useState } from "react";
import Productgrid from "../components/Productgrid";

const Buy = () => {
    const [cart, setCart] = useState([]);

    // ✅ 12 Sample Products
    const sampleProducts = [
        { _id: 1, name: "Laptop", price: "$999", description: "High-performance laptop", image: "https://via.placeholder.com/150" },
        { _id: 2, name: "Smartphone", price: "$799", description: "Latest smartphone", image: "https://via.placeholder.com/150" },
        { _id: 3, name: "Headphones", price: "$199", description: "Noise-canceling headphones", image: "https://via.placeholder.com/150" },
        { _id: 4, name: "Smartwatch", price: "$299", description: "Feature-rich smartwatch", image: "https://via.placeholder.com/150" },
        { _id: 5, name: "Tablet", price: "$499", description: "High-resolution display tablet", image: "https://via.placeholder.com/150" },
        { _id: 6, name: "Camera", price: "$899", description: "Professional DSLR camera", image: "https://via.placeholder.com/150" },
        { _id: 7, name: "Gaming Console", price: "$499", description: "Next-gen gaming console", image: "https://via.placeholder.com/150" },
        { _id: 8, name: "Bluetooth Speaker", price: "$149", description: "Portable Bluetooth speaker", image: "https://via.placeholder.com/150" },
        { _id: 9, name: "Monitor", price: "$299", description: "4K Ultra HD Monitor", image: "https://via.placeholder.com/150" },
        { _id: 10, name: "Keyboard", price: "$99", description: "Mechanical gaming keyboard", image: "https://via.placeholder.com/150" },
        { _id: 11, name: "Mouse", price: "$49", description: "Wireless ergonomic mouse", image: "https://via.placeholder.com/150" },
        { _id: 12, name: "External Hard Drive", price: "$129", description: "1TB SSD external drive", image: "https://via.placeholder.com/150" },
    ];

    // ✅ Commented out Backend API Call
    // useEffect(() => {
    //     axios.get("http://localhost:5000/products")
    //         .then(response => setProducts(response.data))
    //         .catch(error => console.error("Error fetching products:", error));
    // }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Buy Items</h1>
            <Productgrid products={sampleProducts} addToCart={addToCart} />
        </div>
    );
};

export default Buy;
