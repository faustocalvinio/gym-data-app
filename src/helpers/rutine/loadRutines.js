import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { RUTINA_BASE } from "../../globals";

export const loadRutine = async (uid = "") => {
   // if (!uid) throw new Error("El UID del usuario no existe");
   // const collectionRef = collection(FirebaseDB, `rutine-${uid}/`);
   // const docs = await getDocs(collectionRef);
   // if (docs.size === 0) {
   //    try {
   //       const baseRef = setDoc(doc(FirebaseDB, `rutine-${uid}/`), {
   //          ...RUTINA_BASE,
   //       });
   //       return RUTINA_BASE;
   //    } catch (error) {
   //       console.error(error);
   //    }
   // } else {
   //    const rutine = [];
   //    docs.forEach((doc) => {
   //       rutine.push({ id: doc.id, ...doc.data() });
   //    });
   //    const finalRutine = rutine[0];
   //    await delete finalRutine.id;

   //    return finalRutine;
   // }

   try {
      // const querySnapshot = await FirebaseDB.collection("rutina-ddssdsd").get();
      const collectionRef = collection(FirebaseDB, `rutina-ddssdsd`);
      const documentos = {};
      const collectionRef2 = collection(FirebaseDB, `rutina-ddssdsd`);
      const docs = await getDocs(collectionRef2);
      console.log(docs);
      const querySnapshot = await getDocs(collectionRef);
      docs.forEach((doc) => {
         documentos[doc.id] = doc.data();
         console.log(doc.data());
      });
      const { rutina } = documentos;
      await console.log(rutina);
      return rutina
      // return documentos;
   } catch (error) {
      console.error("Error al obtener documentos:", error);
      throw error;
   }

   // return {
   //    lunesFirebase: ["ej1", "ej2", "ej3"],
   //    martes: ["ej1", "ej2", "ej3"],
   //    miercoles: ["ej1", "ej2", "ej3"],
   //    jueves: ["ej1", "ej2", "ej3"],
   //    viernes: ["ej1", "ej2", "ej3"],
   // };
};
