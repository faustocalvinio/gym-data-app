import { singInWithGoogle, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
   return async (dispatch) => {
      dispatch(checkingCredentials());
   };
};

export const startGoogleSignIn = () => {
   return async (dispatch) => {
      dispatch(checkingCredentials());
      const result = await singInWithGoogle();
      if (!result.ok) return dispatch(logout(result.errorMessage));
      console.log(result);
      dispatch(login(result));
   };
};

export const startLogout = () => {
   return async (dispatch) => {
      await logoutFirebase();     
      dispatch(logout());
   };
};
