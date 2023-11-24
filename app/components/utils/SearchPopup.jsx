// components/SearchPopup.js
import React from "react";

const SearchPopup = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-4 rounded shadow-md z-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded-lg"
        />
        <button
          className="mt-2 p-2 bg-primary text-white rounded"
          onClick={onClose}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SearchPopup;
