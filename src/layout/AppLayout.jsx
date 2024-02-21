import { CirclesAnimation, Navbar } from "../components";

export const AppLayout = ({ children }) => {
   return (
      <>
         <CirclesAnimation />
         <main className=" mx-auto flex justify-center items-center align-middle z-20">
            <div className="border border-black dark:border-gray-700 flex flex-col bg-blue-200 min-h-[70vh] pb-5 w-[90%] md:w-[800px] dark:bg-gray-700">
               <Navbar />
               {children}
            </div>
         </main>
      </>
   );
};
