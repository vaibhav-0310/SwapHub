import React from "react";
import DonationForm from "../components/DonateForm"; // Adjust path as needed

const Donate = () => {
  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/icons/')" }}
    >
      {/* Optional: Overlay for better readability */}
      <div className=" bg-opacity-50 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Donate an Item
        </h1>
        <div className="max-w-4xl mx-auto">
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default Donate;
