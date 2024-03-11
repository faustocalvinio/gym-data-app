import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPrFirebase, editPrFirebase, getUuid, removePrFirebase } from "../../helpers";
import { addPr, editPr, removePr } from "../../store/prs";
import toast, { Toaster } from "react-hot-toast";
import { CrossIcon, EditIcon, PlusIcon, UploadIcon } from "../../components";
export const PersonalRecords = () => {
   const [prName, setPrName] = useState("");
   const [prPeso, setPrPeso] = useState(1);
   const [isEditing, setIsEditing] = useState("");
   const { uid } = useSelector((state) => state.auth);
   const prs = useSelector((state) => state.prs);
   const dispatch = useDispatch();

   async function removeHandler(name) {
      removePrFirebase(uid, name);
      dispatch(removePr(name));
      toast.error("Record eliminado correctamente", {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration: 1500,
      });
   }

   function setIsEditingName(name) {
      if (isEditing === name) setIsEditing("");
      else setIsEditing(name);
   }

   async function addPrHandler(e) {
      e.preventDefault();
      if (prName === "") return;
      dispatch(
         addPr({
            name: prName,
            peso: parseInt(prPeso),
         })
      );
      addPrFirebase(uid, prName, prPeso);
      setPrName("");
      setPrPeso(1);
      toast.success("Record agregado correctamente", {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration: 1500,
      });
   }
   function onDoneEdit(e, name) {
      e.preventDefault();
      //  console.log(e.target[0].value);
      const nuevoPeso = e.target[0].value;
      editPrFirebase(uid, name, nuevoPeso);
      dispatch(editPr({ name, nuevoPeso }));
      setIsEditing("");
      toast.success(`Record ${name} editado correctamente`, {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration: 1500,
      });
   }

   useEffect(() => {}, [prs]);

   return (
      <main className="dark:text-white px-2">
         <h1 className="page-title">Personal Records</h1>
         <form
            action=""
            className="pr-new-form"
            onSubmit={(e) => addPrHandler(e)}
         >
            <input
               type="text"
               value={prName}
               onChange={(e) => setPrName(e.target.value)}
               name=""
               id=""
               className="pr-input w-[80%]"
               placeholder="Nombre del ejercicio"
            />
            <input
               type="number"
               name=""
               value={prPeso}
               onChange={(e) => setPrPeso(e.target.value)}
               id=""
               className="pr-input w-[20%]"
            />
            <button className="pr-add-button" type="submit">
               <PlusIcon />
            </button>
         </form>
         <div className="pr-main-cont">
            {prs?.map((pr) => (
               <div key={getUuid()} className="pr-container">
                  <div className="">
                     <h1>{pr.name}</h1>
                  </div>
                  <div className="flex gap-2 items-center">
                     <div
                        className="p-2 cursor-pointer"
                        onClick={() => setIsEditingName(pr.name)}
                     >
                        <EditIcon />
                     </div>
                     {isEditing === pr.name && (
                        <form
                           className="flex gap-2"
                           action=""
                           onSubmit={(e) => onDoneEdit(e, pr.name)}
                        >
                           <input
                              type="number"
                              className="pr-input w-20"
                              defaultValue={pr.peso}
                           />
                           <button
                              type="submit"
                              className="w-[49px] h-[41px] flex justify-center items-center bg-green-950"
                           >
                              <UploadIcon />
                           </button>
                        </form>
                     )}
                     <span className="text-xl">{pr.peso}</span>
                     <button
                        className="pr-remove"
                        onClick={() => removeHandler(pr.name)}
                     >
                        <CrossIcon />
                     </button>
                  </div>
               </div>
            ))}
         </div>
         <Toaster />
      </main>
   );
};
