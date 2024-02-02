import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

const rutinaBase = {
   lunes: ["Remo con Barra", "Bicep Mancuerna", "Remo al pecho"],
   martes: ["Press banca pecho", "Triceps polea", "Press banca declinado"],
   miercoles: ["Sentadilla", "Peso Muerto", "Estocadas"],
   jueves: [
      "Hombro con mancuerna",
      "Remo al cuello",
      "Press de hombro en maquina",
   ],
   viernes: ["Bicicleta", "Cinta", "Eliptica"],
};

export const loadRutine = async (uid = "") => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `rutine-${uid}/`);
   const docs = await getDocs(collectionRef);
   if (docs.size === 0) {
      try {
         const baseRef = setDoc(doc(FirebaseDB, `rutine-${uid}/`), {
            ...rutinaBase,
         });
         return rutinaBase;
      } catch (error) {
         console.log(error);
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
