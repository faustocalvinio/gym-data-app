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
            <button className="objetive-add-button">+</button>
         </form>
         <div className="objetives-main-cont">
            {objetives.map((objetive) => (
               <div key={crypto.randomUUID()} className="objetive-container">
                  {/* <input type="checkbox" name="" id="" checked={objetive.completed}/>
                   */}
                  <div className="flex gap-4">
                     {/* <span
                        className={`${
                           objetive.completed
                              ? "text-green-700"
                              : "text-red-500"
                        }`}
                     >
                        {objetive.completed.toString()}
                     </span> */}
                     <input
                        type="checkbox"
                        name=""
                        id=""
                        defaultChecked={objetive.completed}
                        onChange={() =>
                           changeCompleted(objetive.id, !objetive.completed)
                        }
                     />
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
                     X
                  </button>
               </div>
            ))}
         </div>
         <Toaster />
      </main>
   );
};
