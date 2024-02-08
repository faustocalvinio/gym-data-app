import { Navbar } from "../components";

export const AppLayout = ({ children }) => {
   return (
      <>
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
         <main className=" mx-auto flex justify-center items-center align-middle z-20">
            <div className="border border-black dark:border-gray-700 flex flex-col bg-blue-200 min-h-[70vh] pb-5 w-[90%] md:w-[800px] dark:bg-gray-700">
               <Navbar />
               {children}
            </div>
         </main>
      </>
   );
};
