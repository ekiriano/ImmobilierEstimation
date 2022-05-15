import "./App.css";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { useAuth } from "./contexts/AuthContext";
import { UnauthenticatedApp } from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();

  return <>{user.isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
