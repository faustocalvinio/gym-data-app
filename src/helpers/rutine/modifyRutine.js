import { FirebaseDB } from "../../firebase/config";
import { collection, doc, setDoc } from "firebase/firestore/lite";

export async function modifyRutine(uid = "", newRutine = {}) {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `${uid}`);
   const docRef = doc(collectionRef, "rutina");
   try {
      await setDoc(docRef, newRutine);
      return true;
   } catch (error) {
      console.log(error);
      return new Error("Error al modificar la rutina");
   }
}
