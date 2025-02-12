import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 gap-6 p-8 max-w-4xl">
        {/* Buy Box */}
        <Link to="/buy" className="group relative h-40 w-56 flex items-center justify-center bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-600 transition">
          Buy
        </Link>

        {/* Sell Box */}
        <Link to="/sell" className="group relative h-40 w-56 flex items-center justify-center bg-green-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-green-600 transition">
          Sell
        </Link>

        {/* Rent Box */}
        <Link to="/rent" className="group relative h-40 w-56 flex items-center justify-center bg-purple-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-purple-600 transition">
          Rent
        </Link>

        {/* Donate Box */}
        <Link to="/donate" className="group relative h-40 w-56 flex items-center justify-center bg-red-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-red-600 transition">
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Home;
