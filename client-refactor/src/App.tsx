import { useEffect, useState } from "react";
import { ICurrentUser } from "./APIResponsesTypes";
import "./App.css";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { useAuth } from "./contexts/AuthContext";
import { AuthService } from "./services/AuthService/auth.service";
import { UnauthenticatedApp } from "./UnauthenticatedApp";

function App() {
  const { user, setUser } = useAuth();

  async function getUser() {
    const auth = new AuthService();
    let user: ICurrentUser | null = null;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {data}: {data: ICurrentUser} = await auth.getCurrentUser();
    user = data;
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
    void getUser();
  }, []);

  return <>{user.isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
