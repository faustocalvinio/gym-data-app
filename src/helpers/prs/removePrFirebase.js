import { collection, deleteDoc, doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const removePrFirebase = async (uid = "", name) => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `prs-${uid}/`);
   const objetiveDocRef = doc(collectionRef, name);
   try {
      await deleteDoc(objetiveDocRef);
   } catch (error) {
      console.log(error);
   }
};
