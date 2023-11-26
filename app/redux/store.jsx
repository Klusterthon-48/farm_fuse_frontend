"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import predictionReducer from "./slices/prediction";

const store = configureStore({
  reducer: {
    auth: authReducer,
    prediction: predictionReducer,
  },
});

export default store;
