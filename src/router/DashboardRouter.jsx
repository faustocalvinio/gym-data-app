import { Navigate, Route, Routes } from "react-router-dom";
import {
   HomePage,
   ObjetivesPage,
   PersonalRecords,
   RutinesPage,
} from "../pages";
import { AppLayout } from "../layout/AppLayout";

export const DashboardRouter = () => {
   return (
      <AppLayout>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rutinas" element={<RutinesPage />} />
            <Route path="/prs" element={<PersonalRecords />} />
            <Route path="/objetivos" element={<ObjetivesPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
         </Routes>
      </AppLayout>
   );
};
