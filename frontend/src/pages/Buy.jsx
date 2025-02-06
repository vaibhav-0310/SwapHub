import React, { useEffect, useState } from "react";
import axios from "axios";
import Productgrid from "../components/Productgrid";

const Buy = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Buy Items</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((item) => (
                    <Productgrid key={item._id} product={item} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default Buy;
