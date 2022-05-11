import { useEffect, useState } from "react";
import { ICurrentUser } from "./APIResponsesTypes";
import "./App.css";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { FullPageSpinner } from "./components/lib";
import { useAuth } from "./contexts/AuthContext";
import { AuthService } from "./services/AuthService/auth.service";
import { UnauthenticatedApp } from "./UnauthenticatedApp";
/* eslint-disable */
function App() {
  const { user, setUser } = useAuth();
  const [initialLoading, setInitialLoading] = useState<boolean>(false);

  async function getUser() {
    setInitialLoading(true);
    const auth = new AuthService();
    let user: ICurrentUser | null = null;

    const response = await auth.getCurrentUser();
    user = response.data;
    if (user) {
      setUser({
        name: user.name,
        type: user.user_type,
        isLoggedIn: true,
      });
    }

    return user;
  }

  useEffect(() => {
    getUser();
  }, []);

  return <>{user.isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
