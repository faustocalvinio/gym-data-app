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
               className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-110 transition"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="26.666666666666668"
                  viewBox="0 0 576 512"
               >
                  <path
                     fill="#ffffff"
                     d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1c-1.4.1-2.8.1-4.2.1H392c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2c-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24"
                  />
               </svg>
            </Link>

            <div
               className="items-center justify-between hidden w-full md:flex md:w-auto"
               id="navbar-user"
            >
               <ul className="flex justify-between w-full gap-2">
                  <li>
                     <Link to={`/objetives`} className="navbar-link">
                        Objetivos
                     </Link>
                  </li>
                  <li className="">
                     <Link
                        to={`/rutines`}
                        className="navbar-link hover:text-cyan-500"
                     >
                        Rutinas
                     </Link>
                  </li>
                  <li>
                     <Link to={`/prs`} className="navbar-link">
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
                  className="hover:scale-110 rounded-lg transition-all"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="30"
                     height="30"
                     viewBox="0 0 24 24"
                  >
                     <path
                        fill="#e11d48"
                        d="M5.002 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-14c-1.103 0-2 .897-2 2v6.001H10V7l6 5l-6 5v-3.999H3.002V19c0 1.103.897 2 2 2"
                     />
                  </svg>
               </button>
            </div>
         </div>
      </nav>
   );
};
