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
   removeObjetiveByIdFirebase,
} from "../../helpers";
import toast, { Toaster } from "react-hot-toast";
import { CrossIcon, PlusIcon } from "../../components";

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
         id: crypto.randomUUID(),
         name: nuevoObjetiveInput,
         completed: false,
      };
      dispatch(addObjetive(objetivoNuevo));
      addObjetiveFirebase(uid, objetivoNuevo);
      setNuevoObjetiveInput("");
      toast.success("Objetivo agregado correctamente", {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration: 1500,
      });
   }

   function changeCompleted(id, target) {
      editObjetiveFirebase(uid, id, target);
      dispatch(setCompleted(id));
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
               <div key={crypto.randomUUID()} className="objetive-container">
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
                        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="1"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                 clipRule="evenodd"
                              ></path>
                           </svg>
                        </span>
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
