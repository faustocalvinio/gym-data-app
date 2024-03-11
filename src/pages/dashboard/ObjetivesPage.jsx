import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   addObjetive,
   deleteObjetive,
   setCompleted,
} from "../../store/objetives";
import {
   addObjetiveFirebase,
   editObjetiveFirebase,
   getUuid,
   removeObjetiveByIdFirebase,
} from "../../helpers";
import toast, { Toaster } from "react-hot-toast";
import { Checkbox, CrossIcon, PlusIcon } from "../../components";

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
         duration: 1500,
      });
   }

   function newObjetiveHandler(e) {
      e.preventDefault();
      if (nuevoObjetiveInput === "") return;
      const objetivoNuevo = {
         id: getUuid(),
         name: nuevoObjetiveInput,
         completed: false,
      };
      dispatch(addObjetive(objetivoNuevo));
      addObjetiveFirebase(uid, objetivoNuevo);
      setNuevoObjetiveInput("");
      toast.success(`Objetivo ${objetivoNuevo.name} agregado correctamente`, {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration: 1500,
      });
   }

   function changeCompleted(id, target) {
      editObjetiveFirebase(uid, id, target);
      dispatch(setCompleted(id));
      if (target) {
         toast.success("Objetivo completado", {
            className:
               "dark:bg-black dark:text-white border dark:border-gray-600",
            duration: 1500,
         });
      } else {
         toast.error("Objetivo pendiente", {
            className:
               "dark:bg-black dark:text-white border dark:border-gray-600",
            duration: 1500,
         });
      }
   }

   useEffect(() => {}, [objetives]);

   return (
      <main className="px-2">
         <h1 className="page-title">Objetivos</h1>
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
            <button className="objetive-add-button">
               <PlusIcon />
            </button>
         </form>
         <div className="objetives-main-cont">
            {objetives.map((objetive) => (
               <div key={getUuid()} className="objetive-container">
                  <div className="flex gap-4 items-center">
                     <label
                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                        htmlFor="customStyle"
                     >
                        <input
                           defaultChecked={objetive.completed}
                           onChange={() =>
                              changeCompleted(objetive.id, !objetive.completed)
                           }
                           type="checkbox"
                           className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
                           id="customStyle"
                        />
                        <Checkbox />
                     </label>
                     <span
                        className={`${
                           objetive.completed
                              ? "line-through  text-green-800"
                              : "dark:text-white"
                        }`}
                     >
                        {objetive.name}
                     </span>
                  </div>
                  <button
                     onClick={() => deleteHandler(objetive.id)}
                     className="objetive-remove"
                  >
                     <CrossIcon />
                  </button>
               </div>
            ))}
         </div>
         <Toaster />
      </main>
   );
};
