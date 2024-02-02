import { loadPrsFirebase } from "../../helpers";
import { setPrs } from "./prsSlice";

export const startLoadingPrs = () => {
   return async (dispatch, getState) => {
      const { uid } = getState().auth;
      if (!uid) throw new Error("El UID del usuario no existe");
      const prs = await loadPrsFirebase(uid);

      dispatch(setPrs(prs));
   };
};