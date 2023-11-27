'use client'
import axios from "axios";
import React,  { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {
  setPh,
  setTemperature,
  setSoilMoisture,
  setNutrient,
  setHarvestTime,
  setPlantingTime,
} from '../../redux/slices/prediction'; 

const FarmDetailsModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("south africa"); 
  const [label, setLabel] = useState("maize"); 
  const token = useSelector((state) => state.auth.token);

  const ph = useSelector((state) => state.prediction.ph);
  const temperature = useSelector((state) => state.prediction.temperature);
  const soilMoisture = useSelector((state) => state.prediction.soilMoisture);
  const nutrients = useSelector((state) => state.prediction.nutrients);
  const plantingTime = useSelector((state) => state.prediction.plantingTime);
  const harvestTime = useSelector((state) => state.prediction.harvestTime);

 
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCropChange = (event) => {
    setLabel(event.target.value);
  };

  const handleSubmit = () => {
    const formData = {
      country: country,
      label: label,
    };

    axios
      .post("https://farm-fuse-backend.vercel.app/api/predict", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Success! Response from backend:", response.data);
        
          const predictionData = response.data.payload;

          dispatch(setPh(predictionData.environmentalData.ph));
          dispatch(setTemperature(predictionData.environmentalData.temperature));
          dispatch(setSoilMoisture(predictionData.environmentalData.water_availability));
          dispatch(setNutrient(predictionData.environmentalData.humidity));
          dispatch(setPlantingTime(predictionData.planting_season));
          dispatch(setHarvestTime(predictionData.prediction['Predicted harvest season']));

          onClose();
        } else {
          console.error("Unexpected response status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      })
      .finally(() => {
        onClose();
      });
  };

  if (!isOpen) {
    return null;
  }

  console.log(
    temperature,
    ph,
    soilMoisture,
    nutrients,
    plantingTime,
    harvestTime,
    token
  );
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
          <select
            value={country}
            onChange={handleCountryChange}
            className="flex flex-col bg-grey-1 h-[56px] border border-grey-3 rounded-lg mt-4 mb-10 py-4 px-1"
          >
            <option value="south africa">South Africa</option>
            <option value="nigeria">Nigeria</option>
            <option value="niger">Niger</option>
          </select>
        </div>
        <div className="flex flex-col bg-grey-1">
          <label className="text-grey-3">SELECT YOUR CROP</label>
          <select
            value={label}
            onChange={handleCropChange}
            className="flex flex-col bg-grey-1 h-[56px] border border-grey-3 rounded-lg mt-4 mb-10 py-4 px-1"
          >
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
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmDetailsModal;
