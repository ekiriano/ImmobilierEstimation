import { useEffect } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { HomePage } from "./components/HomePage";
import { Footer, Nav } from "./components/partials";
import { useAuth } from "./contexts/AuthContext";
import { AuthService } from "./services/AuthService/auth.service";
/* eslint-disable */
function App() {

  const { state, setState } = useAuth();

  async function getUser() {
    const auth = new AuthService
    let user: any = null;

    const response = await auth.getCurrentUser();
    user = response.data;

    if(response.status === 200) {
      setState(
        {
          name: user.name,
          type: user.use_type,
          isLoggedIn: true
        }
      )
    }

    return user;
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      
      {
        state.isLoggedIn ? (<> <Nav /> <Dashboard /> </>) : <HomePage />
      }
      
      
    </>
  );
}

export default App;
