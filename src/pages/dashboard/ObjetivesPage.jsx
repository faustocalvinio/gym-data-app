import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addObjetive, deleteObjetive } from "../../store/objetives";
import { addObjetiveFirebase, removeObjetiveByIdFirebase } from "../../helpers";
import toast, { Toaster } from "react-hot-toast";

export const ObjetivesPage = () => {
   const [nuevoObjetiveInput, setNuevoObjetiveInput] = useState("");
   const { uid } = useSelector((state) => state.auth);
   const objetives = useSelector((state) => state.objetives);
   const dispatch = useDispatch();

   function deleteHandler(id) {
      removeObjetiveByIdFirebase(uid, id);
      dispatch(deleteObjetive(id));
      toast.error("Objetivo eliminado correctamente", {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration:1500
      });
   }

   function newObjetiveHandler(e) {
      e.preventDefault();
      if (nuevoObjetiveInput === "") return;
      const objetivoNuevo = {
         id: crypto.randomUUID(),
         name: nuevoObjetiveInput,
      };
      dispatch(addObjetive(objetivoNuevo));
      addObjetiveFirebase(uid, objetivoNuevo);
      setNuevoObjetiveInput("");
      toast.success("Objetivo agregado correctamente", {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration:1500

      });
   }

   useEffect(() => {}, [objetives]);

   return (
      <main className="px-2">
         <h1 className="text-5xl mt-4 dark:text-white">Objetivos</h1>
         <form
            action=""
            onSubmit={newObjetiveHandler}
            className="objetive-new-form"
         >
            <input
               type="text"
               placeholder="Nuevo objetivo"
               value={nuevoObjetiveInput}
               onChange={(e) => setNuevoObjetiveInput(e.target.value)}
               className="objetive-input"
            />
            <button className="objetive-add-button">Agregar</button>
         </form>
         <div className="objetives-main-cont">
            {objetives.map((objetive) => (
               <div key={crypto.randomUUID()} className="objetive-container">
                  <span className="objetive-name">{objetive.name}</span>
                  <button
                     onClick={() => deleteHandler(objetive.id)}
                     className="objetive-remove"
                  >
                     Eliminar
                  </button>
               </div>
            ))}
         </div>
         <Toaster />
      </main>
   );
};
