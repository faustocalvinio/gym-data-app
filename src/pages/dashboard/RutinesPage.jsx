import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { modifyRutine } from "../../helpers";
import { CheckingAuth } from "../../components";
import { editRutineFirebase } from "../../helpers/rutine/editRutine";

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
   function obtenerDiaSemana() {
      var diasSemana = [
         "Domingo",
         "Lunes",
         "Martes",
         "Miércoles",
         "Jueves",
         "Viernes",
         "Sábado",
      ];
      var fecha = new Date();
      var diaSemana = fecha.getDay();
      return diasSemana[diaSemana];
   }
   function editHandler(event) {
      console.log(JSON.parse(event.target.value));
      editRutineFirebase(uid, JSON.parse(event.target.value));
   }

   useEffect(() => {
      setRutina(rutinaDesdeRedux);
      setIsLoading(false);
   }, [rutinaDesdeRedux]);

   return (
      <div className="text-white">
         {isLoading ? (
            <CheckingAuth />
         ) : (
            <>
               <section>
                  <h1>{JSON.stringify(rutina)}</h1>
                  <p className="text-white">
                     Hoy es <span>{obtenerDiaSemana()}</span>
                  </p>
               </section>
               <button
                  className="bg-blue-500 text-white p-2 rounded-md"
                  onClick={editarRutina}
               >
                  Editar
               </button>
               <input
                  className="text-black"
                  type="text"
                  name=""
                  id=""
                  onClick={(e) => editHandler(e)}
               />
            </>
         )}
      </div>
   );
};
