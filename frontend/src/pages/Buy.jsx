import React, { useState, useEffect } from "react";
import Productgrid from "../components/Productgrid";
import axios from "axios";

const Buy = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/api/buy")
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Buy Items</h1>
            <Productgrid  products={products} />
        </div>
    );
};

export default Buy;
