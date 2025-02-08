import React, { useState } from "react";
import axios from "axios";

const SellForm = () => {
  const [formData, setFormData] = useState({
    product: "",
    image: "",
    seller: "",
    college: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products/upload", formData);
      alert("Product uploaded successfully!");
      setFormData({ product: "", image: "", seller: "", college: "", price: "" });
    } catch (error) {
      console.error("Error uploading product", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <label className="block text-sm font-medium text-gray-700">Product Name</label>
      <input
        type="text"
        name="product"
        value={formData.product}
        onChange={handleChange}
        className="w-full border p-2 rounded-md mt-1"
        required
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Image URL</label>
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        className="w-full border p-2 rounded-md mt-1"
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Seller Name</label>
      <input
        type="text"
        name="seller"
        value={formData.seller}
        onChange={handleChange}
        className="w-full border p-2 rounded-md mt-1"
        required
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">College Name</label>
      <input
        type="text"
        name="college"
        value={formData.college}
        onChange={handleChange}
        className="w-full border p-2 rounded-md mt-1"
        required
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Price ($)</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="w-full border p-2 rounded-md mt-1"
        required
      />

      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Upload Product
      </button>
    </form>
  );
};

export default SellForm;
