import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { useEffect } from "react";
import { login, logout } from "../store/auth";
import { startLoadingRutine } from "../store/rutine";
import { startLoadingObjetivos } from "../store/objetives";
import { startLoadingPrs } from "../store/prs";

export const useCheckAuth = () => {
   const { status } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async (user) => {
         if (!user) return dispatch(logout());

         const { uid, email, displayName, photoURL } = user;
         dispatch(login({ uid, email, displayName, photoURL }));
         dispatch(startLoadingRutine());
         dispatch(startLoadingObjetivos());
         dispatch(startLoadingPrs());
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return status;
};
