import { useEffect} from "react";
import { ICurrentUser } from "./APIResponsesTypes";
import "./App.css";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { useAuth } from "./contexts/AuthContext";
import { AuthService } from "./services/AuthService/auth.service";
import { UnauthenticatedApp } from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();

  return <>{user.isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
