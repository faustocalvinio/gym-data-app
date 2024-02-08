import { collection, doc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const editObjetiveFirebase = async (uid = "", id, target) => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `objetives-${uid}/`);
   const objetiveDocRef = doc(collectionRef, id);
   try {
      await updateDoc(objetiveDocRef, {
         completed: target,
      });
   } catch (error) {
      throw new Error("Error al editar el objetivo");
   }
};
