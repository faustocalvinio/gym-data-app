import { collection, doc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const editPrFirebase = async (uid, name, nuevoPeso) => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `prs-${uid}/`);
   const objetiveDocRef = doc(collectionRef, name);

   try {
      await updateDoc(objetiveDocRef, {
         peso: Number(nuevoPeso),
      });
   } catch (error) {
      throw new Error("Error al editar el pr");
   }
};
