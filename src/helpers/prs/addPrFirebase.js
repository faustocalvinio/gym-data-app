import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const addPrFirebase = async (uid = "", name, peso) => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `prs-${uid}/`);
   const newPrElement = doc(collectionRef, name);
   try {
      await setDoc(newPrElement, { name: name, peso: parseInt(peso) });
   } catch (error) {
      console.log(error);
   }
};
