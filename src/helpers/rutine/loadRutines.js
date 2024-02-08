import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { RUTINA_BASE } from "../../globals";


export const loadRutine = async (uid = "") => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `rutine-${uid}/`);
   const docs = await getDocs(collectionRef);
   if (docs.size === 0) {
      try {
         const baseRef = setDoc(doc(FirebaseDB, `rutine-${uid}/`), {
            ...RUTINA_BASE,
         });
         return RUTINA_BASE;
      } catch (error) {
         console.error(error);
      }
   } else {
      const rutine = [];
      docs.forEach((doc) => {
         rutine.push({ id: doc.id, ...doc.data() });
      });
      const finalRutine = rutine[0];
      await delete finalRutine.id;

      return finalRutine;
   }
};
