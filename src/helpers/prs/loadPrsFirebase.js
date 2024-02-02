// import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
// import { FirebaseDB } from "../../firebase/config";

import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { PRS_BASE } from "../../globals";

export const loadPrsFirebase = async (uid = "") => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `prs-${uid}/`);
   const existingDocs = await getDocs(collectionRef);
//    return PRS_BASE
   if (existingDocs.size === 0) {
      for (const pr of PRS_BASE) {
         const prDocRef = doc(collectionRef, pr.name);
         try {
            await setDoc(prDocRef, pr);
         } catch (error) {
            console.error("Error al añadir el pr:", error);
         }
      }
      return [PRS_BASE]; // No hay documentos existentes, se añadieron nuevos objetivos.
   } else {
      const existingPrs = existingDocs.docs.map((doc) => {
         return doc.data();
      });
      return existingPrs;
   }
};
