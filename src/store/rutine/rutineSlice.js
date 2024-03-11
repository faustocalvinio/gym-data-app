import { createSlice } from "@reduxjs/toolkit";
import { RUTINA_BASE } from "../../globals";

export const rutineSlice = createSlice({
   name: "rutine",
   initialState: RUTINA_BASE,
   reducers: {
      setRutine: (state, action) => {
         state.rutine = action.payload;
      },
   },
});

export const { setRutine } = rutineSlice.actions;
