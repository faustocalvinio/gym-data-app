import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPrFirebase, removePrFirebase } from "../../helpers";
import { addPr, removePr } from "../../store/prs";
import toast, { Toaster } from "react-hot-toast";
export const PersonalRecords = () => {
   const [prName, setPrName] = useState("");
   const [prPeso, setPrPeso] = useState(1);
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
               +
            </button>
         </form>
         <div className="pr-main-cont">
            {prs?.map((pr) => (
               <div key={crypto.randomUUID()} className="pr-container">
                  <div className="">
                     <h1>{pr.name}</h1>
                  </div>
                  <div className="flex gap-2 items-center">
                     {/* <input type="number"  placeholder="peso" className="w-20 text-black" value={parseInt(pr.peso)}/> */}
                     {/* <button className="pr-peso-btn">-</button> */}
                     <span className="text-xl">{pr.peso}</span>

                     {/* <button className="pr-peso-btn">+</button> */}
                     <button
                        className="pr-remove"
                        onClick={() => removeHandler(pr.name)}
                     >
                        X
                     </button>
                  </div>
               </div>
            ))}
         </div>
         <Toaster />
      </main>
   );
};
