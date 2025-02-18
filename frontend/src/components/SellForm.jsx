import React, { useState } from "react";
import axios from "axios";
import ImageUpload from "./ImageUpload"; // Adjust path as needed

const SellForm = () => {
  const [formData, setFormData] = useState({
    product: "",
    image: "",
    description: "",
    price: "",
    seller: "654321abcdef",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/sell", formData);
      alert("Product uploaded successfully!");
      setFormData({ product: "", image: "", description: "", price: "", seller: "654321abcdef" });
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
    <div className="flex bg-blue-100 p-8 rounded-lg shadow-lg">
      {/* Left side - Form */}
      <form onSubmit={handleSubmit} className="w-1/2 bg-gray-300 p-6 rounded-lg shadow-md">
        <label className="block font-bold text-gray-700">Product Name</label>
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full border p-2 rounded-md mt-1 bg-white"
          required
        />

        <label className="block font-bold text-gray-700 mt-4">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-2 rounded-md mt-1 bg-white"
          required
        />

        <label className="block font-bold text-gray-700 mt-4">Description</label>
        <textarea 
          name="description" 
          placeholder="Description" 
          value={formData.description} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3" 
          required 
        />

        <label className="block font-bold text-gray-700 mt-4">Price (Rs)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded-md mt-1 bg-white"
          required
        />

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Upload Product
        </button>
      </form>

      {/* Right side - Image Upload */}
      <div className="w-1/2 flex justify-center items-center bg-white rounded-lg shadow-md p-6">
        <ImageUpload />
      </div>
    </div>
  );
};

export default SellForm;
