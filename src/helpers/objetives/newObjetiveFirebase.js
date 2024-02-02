import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const addObjetiveFirebase = async (uid = "", data) => {
   if (!uid) throw new Error("El UID del usuario no existe");
   const collectionRef = collection(FirebaseDB, `objetives-${uid}/`);
   const newDocElement = doc(collectionRef, data.id);
   await setDoc(newDocElement, data);
};
