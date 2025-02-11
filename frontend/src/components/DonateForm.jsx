import React, { useState } from "react";
import axios from "axios";
import ImageUpload from "../components/ImageUpload"; // Adjust path as needed
import CategoryCarousel from "../components/categorycarousel"; // Adjust path as needed

const DonationForm = () => {
  const [formData, setFormData] = useState({
    item: "",
    image: "",
    donor: "",
    college: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/donations/add", formData);
      alert("Item donated successfully!");
      setFormData({ item: "", image: "", donor: "", college: "", description: "" });
    } catch (error) {
      console.error("Error donating item", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-green-100 p-8 rounded-lg shadow-lg">
      {/* Category Carousel Above Form */}
      <CategoryCarousel />

      {/* Donation Form */}
      <div className="flex w-full max-w-4xl mt-6">
        {/* Left side - Form */}
        <form onSubmit={handleSubmit} className="w-1/2 bg-green-200 p-6 rounded-lg shadow-md">
          <label className="block font-bold text-sm text-gray-700">Item Name</label>
          <input
            type="text"
            name="item"
            value={formData.item}
            onChange={handleChange}
            className="w-full bg-white border p-2 rounded-md mt-1"
            required
          />

          <label className="block font-bold text-sm text-gray-700 mt-4">Donor Name</label>
          <input
            type="text"
            name="donor"
            value={formData.donor}
            onChange={handleChange}
            className="w-full bg-white border p-2 rounded-md mt-1"
            required
          />

          <label className="block font-bold text-sm text-gray-700 mt-4">College Name</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="w-full bg-white border p-2 rounded-md mt-1"
            required
          />

          <label className="block font-bold text-sm text-gray-700 mt-4">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-white border p-2 rounded-md mt-1"
            required
          />

          <button
            type="submit"
            className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Donate Item
          </button>
        </form>

        {/* Right side - Image Upload */}
        <div className="w-1/2 flex justify-center items-center">
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
