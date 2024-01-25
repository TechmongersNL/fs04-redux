// src/store/balance/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.amount += action.payload;
    },

    withdraw: (state, action) => {
      if (state.amount < action.payload) {
        alert("Not enough money!");
        return state;
      }
      state.amount -= action.payload;
    },

    reset: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { deposit, withdraw, reset } = balanceSlice.actions;

export default balanceSlice.reducer;
