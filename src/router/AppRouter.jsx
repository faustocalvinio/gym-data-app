import { Navigate, Route, Routes } from "react-router-dom";

import { CheckingAuth } from "../components";
import { useCheckAuth } from "../hooks";
import { DashboardRouter } from "./DashboardRouter";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
   const status = useCheckAuth();

   if (status === "checking") {
      return <CheckingAuth />;
   }
   return (
      <Routes>
         {status === "authenticated" ? (
            <Route path="/*" element={<DashboardRouter />} />
         ) : (
            <Route path="/auth/*" element={<AuthRouter />} />
         )}
         <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
   );
};
