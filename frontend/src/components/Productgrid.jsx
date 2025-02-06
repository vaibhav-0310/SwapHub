import React from "react";

const Productgrid = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
      <div className="flex-grow">
        <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <p className="text-gray-500 text-sm mt-1">{product.description}</p>
      </div>
      <div className="mt-auto flex flex-col space-y-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Buy Now
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productgrid;
