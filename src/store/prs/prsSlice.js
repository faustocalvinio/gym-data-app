import { createSlice } from "@reduxjs/toolkit";
import { PRS_BASE } from "../../globals";

export const prsSlice = createSlice({
   name: "prs",
   initialState: PRS_BASE,
   reducers: {
      setPrs: (state, action) => {
         return action.payload;
      },
      addPr: (state, action) => {
         state.push(action.payload);
         return state;
      },
      removePr: (state, action) => {
         return state.filter((pr) => pr.name !== action.payload);      
      },
   },
});

export const { setPrs, addPr, removePr } = prsSlice.actions;
