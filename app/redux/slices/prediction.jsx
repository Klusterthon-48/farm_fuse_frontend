"use client";

import { createSlice } from '@reduxjs/toolkit';

export const predictionSlice = createSlice({
  name: 'prediction',
  initialState: {
    ph: '',
    temperature: '',
    soilMoisture: '',
    nutrients: '',
    plantingTime: '',
    harvestTime: '',
  },
  reducers: {
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
      state.plantingTime= action.payload;
    },
    setHarvestTime: (state, action) => {
      state.harvestTime = action.payload;
    },
  },
});

export const { setPh, setTemperature, setSoilMoisture, setNutrient,setHarvestTime, setPlantingTime } = predictionSlice.actions;


export default predictionSlice.reducer;
