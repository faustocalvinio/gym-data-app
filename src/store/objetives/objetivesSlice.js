import { createSlice } from "@reduxjs/toolkit";

export const objetivesSlice = createSlice({
   name: "objetives",
   initialState: [],
   reducers: {
      setObjetives: (state, action) => {
         return (state = action.payload);
      },
      deleteObjetive: (state, action) => {
         return state.filter((objetive) => objetive.id !== action.payload);
      },
      addObjetive: (state, action) => {
         state.push(action.payload);
      },
      setCompleted: (state, action) => {
         state.forEach((objetive) => {
            if (objetive.id === action.payload) {
               objetive.completed = !objetive.completed;
            }
         });
         return state;
      },
   },
});

export const { deleteObjetive, addObjetive, setObjetives, setCompleted } =
   objetivesSlice.actions;
