import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { OBJETIVOS_BASE } from "../../globals";

export const loadObjectivesFirebase = async (uid = "") => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `objetives-${uid}/`);
   const existingDocs = await getDocs(collectionRef);
   if (existingDocs.size === 0) {
      for (const objetivo of OBJETIVOS_BASE) {
         const objetivoDocRef = doc(collectionRef, objetivo.id);
         try {
            await setDoc(objetivoDocRef, objetivo);
         } catch (error) {
            console.error("Error al añadir el objetivo:", error);
         }
      }
      return [OBJETIVOS_BASE]; // No hay documentos existentes, se añadieron nuevos objetivos.
   } else {
      const existingObjectives = existingDocs.docs.map((doc) => {
         return doc.data();
      });
      return existingObjectives;
   }
};
