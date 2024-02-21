import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startLogout } from "../../store/auth";
import { Link } from "react-router-dom";
import { HomeIcon } from "./icons/HomeIcon";
import { LogoutIcon } from "./icons/LogoutIcon";
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
               <HomeIcon />
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
                  <LogoutIcon />
               </button>
            </div>
         </div>
      </nav>
   );
};
