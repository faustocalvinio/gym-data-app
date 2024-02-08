import { loadObjectivesFirebase } from "../../helpers";
import { setObjetives } from "./objetivesSlice";

export const startLoadingObjetivos = () => {
   return async (dispatch, getState) => {
      const { uid } = getState().auth;
      if (!uid) throw new Error("El UID del usuario no existe");
      const objetives = await loadObjectivesFirebase(uid);
      // console.log(objetives.flat());
      dispatch(setObjetives(objetives.flat()));
   };
};
