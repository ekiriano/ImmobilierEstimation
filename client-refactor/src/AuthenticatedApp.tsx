import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { NotFoundScreen } from "./components/NotFoundScreen";
import { Nav } from "./components/partials";
import { MasterForm } from "./pages/user/simple/estimations/apartment/MasterForm";

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
      <Route path="/apartment/*" element={<MasterForm />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export { AuthenticatedApp };
