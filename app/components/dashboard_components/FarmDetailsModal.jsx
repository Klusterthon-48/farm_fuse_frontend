// components/SearchPopup.js
import React from "react";

const FarmDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>

      <div className="bg-grey-1 p-12 w-[50%] rounded-2xl shadow-md z-10 text-white">
        <h2 className="font-medium text-4xl mb-7">Edit Farm Details</h2>

        <div className="flex flex-col bg-grey-1">
          <label className="text-grey-3">SELECT YOUR FARM LOCATION</label>
          <select className="flex flex-col bg-grey-1 h-[56px] border border-grey-3 rounded-lg mt-4 mb-10 py-4 px-1">
            <option value="south africa">South Africa</option>
            <option value="nigeria">Nigeria</option>
            <option value="niger">Niger</option>
          </select>
        </div>
        <div className="flex flex-col bg-grey-1">
          <label className="text-grey-3">SELECT YOUR CROP</label>
          <select className="flex flex-col bg-grey-1 h-[56px] border border-grey-3 rounded-lg mt-4 mb-10 py-4 px-1">
            <option value="maize">Maize</option>
            <option value="melon">Melon</option>
            <option value="beans">Beans</option>
          </select>
        </div>
        <div className="flex gap-8">
          <button
            className="mt-2  py-3 border border-primary text-white rounded px-16"
            onClick={onClose}
          >
            CANCEL
          </button>
          <button
            className="mt-2 py-3 px-16 bg-primary text-white rounded"
            onClick={onClose}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmDetailsModal;
