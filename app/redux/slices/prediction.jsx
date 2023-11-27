"use client";

import { createSlice } from "@reduxjs/toolkit";

export const predictionSlice = createSlice({
  name: "prediction",
  initialState: {
    ph: "0",
    temperature: "0",
    soilMoisture: "0%",
    nutrients: "0%",
    plantingTime: "",
    harvestTime: "",
    country: "Kenya",
    label: "Maize",
    farmDetails: null,
  },
  reducers: {
    setFarmDetails: (state, action) => {
      state.farmDetails = action.payload;
    },
    setPh: (state, action) => {
      state.ph = action.payload;
    },
    setNutrient: (state, action) => {
      state.nutrients = action.payload;
    },
    setTemperature: (state, action) => {
      state.temperature = action.payload;
    },
    setSoilMoisture: (state, action) => {
      state.soilMoisture = action.payload;
    },
    setPlantingTime: (state, action) => {
      state.plantingTime = action.payload;
    },
    setHarvestTime: (state, action) => {
      state.harvestTime = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setLabel: (state, action) => {
      state.label = action.payload;
    },
  },
});

export const {
  setPh,
  setTemperature,
  setSoilMoisture,
  setNutrient,
  setHarvestTime,
  setPlantingTime,
  setCountry,
  setLabel,
  setFarmDetails,
} = predictionSlice.actions;

export default predictionSlice.reducer;
