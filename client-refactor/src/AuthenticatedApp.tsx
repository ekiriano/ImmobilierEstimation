import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { NotFoundScreen } from "./components/NotFoundScreen";
import { Nav } from "./components/partials";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./contexts/AuthContext";
import BecomePremium from "./pages/user/BecomePremium";
import { MasterForm as ApartmentMasterForm } from "./pages/user/simple/estimations/apartment/MasterForm";
import { MasterForm as HouseMasterForm } from "./pages/user/simple/estimations/house/MasterForm";
import { MasterForm as SuperMasterForm } from "./pages/user/super/estimations/MasterForm";

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
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/apartment/*" element={<ApartmentMasterForm />} />
      <Route path="/house/*" element={<HouseMasterForm />} />
      <Route
        path="/premium"
        element={
          <ProtectedRoute isAllowed={user.type === "simple"}>
            <BecomePremium />
          </ProtectedRoute>
        }
      />
      <Route
        path="/super"
        element={
          <ProtectedRoute isAllowed={user.type === "super"}>
            <SuperMasterForm />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export { AuthenticatedApp };
