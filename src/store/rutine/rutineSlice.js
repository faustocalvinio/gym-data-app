import { createSlice } from "@reduxjs/toolkit";

export const rutineSlice = createSlice({
   name: "rutine",
   initialState: {
      lunes: ["ej1", "ej2", "ej3"],
      martes: ["ej1", "ej2", "ej3"],
      miercoles: ["ej1", "ej2", "ej3"],
      jueves: ["ej1", "ej2", "ej3"],
      viernes: ["ej1", "ej2", "ej3"],
   },
   reducers: {
      setRutine: (state, action) => {
         state.rutine = action.payload;
      },
   },
});

export const { setRutine } = rutineSlice.actions;
