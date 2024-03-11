import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, startGoogleSignIn } from "../../store/auth";
import { GoogleLogin } from "../../components";
import { exampleUser } from "../../globals";

export const LoginPage = () => {
   const { status } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   const isAuthenticating = useMemo(() => status === "checking", [status]);
   const onGoogleSignIn = () => {
      dispatch(startGoogleSignIn());
   };

   function signInWithExample() {
      dispatch(
         login(exampleUser)
      );
   }

   return (
      <div className="bg-black min-h-svh w-full flex justify-center items-center align-middle">
         <div className="flex flex-col min-h-60 w-80 px-4 py-4 dark:bg-slate-900 dark:text-white items-center justify-center rounded-lg">
            <h1 className="mb-4">Login With Firebase</h1>
            <button
               onClick={onGoogleSignIn}
               disabled={isAuthenticating}
               className="dark:bg-blue-950 px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            >
               <GoogleLogin />
            </button>
            <button
               onClick={() => signInWithExample()}
               className="bg-blue-950 px-4 py-2 flex w-50 mt-4 rounded-lg border border-slate-700"
            >
               Login with an example account
            </button>
            {/* <h2>TODO: use an example account ? </h2> */}
         </div>
      </div>
   );
};
