import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { NotFoundScreen } from "./components/NotFoundScreen";
import { Nav } from "./components/partials";
import { MasterForm as ApartmentMasterForm } from "./pages/user/simple/estimations/apartment/MasterForm";
import { MasterForm as HouseMasterForm } from "./pages/user/simple/estimations/house/MasterForm";

const AuthenticatedApp = () => {
  return (
    <>
      <Nav />
      <AppRoutes />
      <ReactQueryDevtools />
    </>
  );
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/apartment/*" element={<ApartmentMasterForm />} />
      <Route path="/house/*" element={<HouseMasterForm />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export { AuthenticatedApp };
