import { Link } from "react-router-dom";

export const HomePage = () => {
   return (
      <main className="dark:text-white px-2 py-2">
         <h1 className="text-white text-4xl">🤸🤩🙂</h1>
         <div className="mt-4 flex flex-col gap-2">
            <Link
               to={`/rutines`}
               className="inline-flex items-center justify-center px-4  py-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            >
               <span className="w-full">Rutinas</span>
               <svg
                  className="w-4 h-4 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
               </svg>
            </Link>
            <Link
               to={`/prs`}
               className="inline-flex items-center justify-center px-4  py-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            >
               <span className="w-full">PR`s</span>
               <svg
                  className="w-4 h-4 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
               </svg>
            </Link>
            <Link
               to={`/objetives`}
               className="inline-flex items-center justify-center px-4  py-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            >
               <span className="w-full">Objetivos</span>
               <svg
                  className="w-4 h-4 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
               </svg>
            </Link>
            <h4>To-do</h4>
            <ol className="list-decimal px-4">
               <li className="">checkbox done objective</li>
               <li>example user in login page</li>
            </ol>
         </div>
      </main>
   );
};
