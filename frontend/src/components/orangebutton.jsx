import React from "react";

const OrangeButton = ({ text, onClick }) => {
  return (
    <button
      className="bg-[#D15A34] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#BB4F2D] transition-all"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default OrangeButton;
