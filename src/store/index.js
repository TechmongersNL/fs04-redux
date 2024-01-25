// src/store/index.js
import balanceReducer from "./balance/slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});

export default store;
