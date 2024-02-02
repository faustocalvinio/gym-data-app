import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { modifyRutine } from "../../helpers";
import { CheckingAuth } from "../../components";

export const RutinesPage = () => {
   const { rutine: rutinaDesdeRedux } = useSelector((state) => state.rutine);
   const { uid } = useSelector((state) => state.auth);
   const [rutina, setRutina] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   async function editarRutina() {
      await modifyRutine(uid, {
         lunes: ["Remo con Barra", "Bicep Mancuerna", "Remo al pecho"],
      });
      setRutina({
         lunes: ["Remo con Barra", "Bicep Mancuerna", "Remo al pecho"],
      });
   }

   useEffect(() => {
      setRutina(rutinaDesdeRedux);
      setIsLoading(false);
   }, [rutinaDesdeRedux]);

   return (
      <div>     
         {isLoading ? (
            <CheckingAuth />
         ) : (
            <>
               <section>
                
                  <h1>{JSON.stringify(rutina)}</h1>
                 
               </section>
               <button
                  className="bg-blue-500 text-white p-2 rounded-md"
                  onClick={editarRutina}
               >
                  Editar
               </button>
            </>
         )}
      </div>
   );
};