import React from "react";

export const CirclesAnimation = () => {

    // !IMPORTANTE CSS EN GLOBALS.CSS

   return (
      <div className="area absolute w-full aspect-square top-0 left-0 right-0 bottom-0 z-10">
         <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div>
   );
};
