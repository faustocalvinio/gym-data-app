import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startLogout } from "../../store/auth";
import { Link } from "react-router-dom";
export const Navbar = () => {
   const dispatch = useDispatch();
   const { photoURL, displayName } = useSelector((state) => state.auth);

   function logOutHandler() {
      dispatch(startLogout());
   }

   return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
               to="/"
               className="flex items-center space-x-3 rtl:space-x-reverse"
            >
               {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-home"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
               </svg>
            </Link>
            
            <div
               className="items-center justify-between hidden w-full md:flex md:w-auto"
               id="navbar-user"
            >
               <ul className="flex justify-between w-full gap-2">
                  <li>
                     <Link
                        to={`/objetivos`}
                        className="navbar-link"
                     >
                        Objetivos
                     </Link>
                  </li>
                  <li>
                     <Link
                        to={`/rutines`}
                        className="navbar-link"
                     >
                        Rutinas
                     </Link>
                  </li>
                  <li>
                     <Link
                        to={`/prs`}
                        className="navbar-link"
                     >
                        P.R.s
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
               <span className="sr-only">Open user menu</span>
               <img
                  className="w-8 h-8 rounded-full"
                  src={photoURL}
                  referrerPolicy="no-referrer"
                  alt="user photo"
               />
               <p className="text-xl text-gray-900 dark:text-white">
                  {displayName.split(" ")[0]}
               </p>
               <button
                  onClick={logOutHandler}
                  className="hover:bg-gray-700 rounded-lg transition-all"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="icon icon-tabler icon-tabler-logout"
                     width="30"
                     height="30"
                     viewBox="0 0 24 24"
                     strokeWidth="1"
                     stroke="#ff2825"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                     <path d="M9 12h12l-3 -3" />
                     <path d="M18 15l3 -3" />
                  </svg>
               </button>
            </div>
         </div>
      </nav>
   );
};
