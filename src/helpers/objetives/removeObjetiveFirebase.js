import { collection, deleteDoc, doc, getDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const removeObjetiveByIdFirebase = async (uid = "", id) => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `objetives-${uid}/`);
   const objetiveDocRef = doc(collectionRef, id);
   try {
      await deleteDoc(objetiveDocRef);
   } catch (error) {
      console.log(error);
   }
};
