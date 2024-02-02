import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { rutineSlice } from "./rutine";
import { objetivesSlice } from "./objetives";
import { prsSlice } from "./prs";

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      rutine: rutineSlice.reducer,
      objetives: objetivesSlice.reducer,
      prs: prsSlice.reducer,
   },
});
