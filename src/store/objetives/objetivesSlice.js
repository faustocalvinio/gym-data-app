import { createSlice } from "@reduxjs/toolkit";
import { OBJETIVOS_BASE } from "../../globals";

export const objetivesSlice = createSlice({
   name: "objetives",
   initialState: OBJETIVOS_BASE,
   reducers: {
      setObjetives: (state, action) => {
         return action.payload;
      },
      deleteObjetive: (state, action) => {
         return state.filter((objetive) => objetive.id !== action.payload);
      },
      addObjetive: (state, action) => {
         state.push(action.payload);
      },
   },
});

export const { deleteObjetive, addObjetive, setObjetives } =
   objetivesSlice.actions;
