import { createSlice } from "@reduxjs/toolkit";

export const prsSlice = createSlice({
   name: "prs",
   initialState: [],
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
      editPr: (state, action) => {
         const { name, nuevoPeso } = action.payload;
         const modifPr = { name, peso: Number(nuevoPeso) };
         return state.map((pr) => (pr.name === name ? modifPr : pr));
      },
   },
});

export const { setPrs, addPr, removePr, editPr } = prsSlice.actions;
