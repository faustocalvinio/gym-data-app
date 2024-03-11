import { RUTINA_BASE } from "../../globals";
import { loadRutine } from "../../helpers";
import { setRutine } from "./rutineSlice";

export const startLoadingRutine = () => {
   return async (dispatch, getState) => {
      const { uid } = getState().auth;
      if (!uid) throw new Error("El UID del usuario no existe");
      const rutine = await loadRutine(uid);
      dispatch(setRutine(RUTINA_BASE));
   };
};
