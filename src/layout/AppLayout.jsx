import { Navbar } from "../components";

export const AppLayout = ({ children }) => {
   return (
      <main className="dark:bg-black min-h-svh w-full flex justify-center items-center align-middle">
         <div className="border border-black dark:border-gray-700 flex flex-col bg-blue-200 min-h-[70vh] pb-5 w-[300px] md:w-[800px] dark:bg-gray-700">
            <Navbar />
            {children}
         </div>
      </main>
   );
};
