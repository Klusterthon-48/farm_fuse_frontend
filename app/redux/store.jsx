"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import predictionReducer from "./slices/prediction";

const store = configureStore({
  reducer: {
    user: userReducer,
    prediction: predictionReducer,
  },
});

export default store;
