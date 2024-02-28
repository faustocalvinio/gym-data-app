import { collection, getDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { getDocs } from "firebase/firestore";

export const editRutineFirebase = async (uid, nueva) => {
   console.log(`nueva ${nueva}`);
   try {
      // const querySnapshot = await FirebaseDB.collection("rutina-ddssdsd").get();
      const collectionRef = collection(FirebaseDB, `rutina-ddssdsd`);
      const docs = await getDocs(collectionRef);
      console.log(docs.data());
   } catch (error) {
      console.log(error);
   }
};
