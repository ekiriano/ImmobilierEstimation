import { Dispatch, ReactNode, useContext, useEffect, useState } from "react";
import {
  loginParams,
  registerParams,
} from "../services/AuthService/AuthService";
import { AuthService } from "../services/AuthService/auth.service";
import { createContext } from "react";
import { ICurrentUser, LoginAPIResponse } from "../APIResponsesTypes";
import { FullPageSpinner } from "../components/lib";
import { useNavigate } from "react-router-dom";

export interface IUser {
  name: string;
  type: string;
  isLoggedIn: boolean;
}

const initialState = {
  name: "",
  type: "",
  isLoggedIn: false,
};

interface AuthContextType {
  user: IUser;
  setUser: Dispatch<React.SetStateAction<IUser>>;
  token?: string;
  login: (params: loginParams) => Promise<void>;
  logout: () => void;
  register: (params: registerParams) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);
AuthContext.displayName = "AuthContext";

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser>(initialState);
  const [token, setToken] = useState<string>("");
  const [initialLoading, setInitialLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const auth = new AuthService();

  useEffect(() => {
    void getUser();
  }, []);

  const handleLoginResponse = ({
    data: { name, user_type, token },
  }: {
    data: LoginAPIResponse;
  }) => {
    setToken(token);
    setUser({
      name: name,
      type: user_type,
      isLoggedIn: true,
    });
    localStorage.setItem("token", token);
    navigate("/dashboard");
  };

  async function getUser() {
    if (localStorage.getItem("token")) {
      const auth = new AuthService();
      const { data, status }: { data: ICurrentUser; status: number } =
        await auth.getCurrentUser();
      if (status === 200) {
        setUser({
          name: data.name,
          type: data.user_type,
          isLoggedIn: true,
        });
      }
      setInitialLoading(false);
    }
  }

  const login = (params: loginParams) => {
    return auth.login(params).then(handleLoginResponse);
  };

  const register = (params: registerParams) => {
    return auth.register(params).then(() => {
      navigate("/login");
    });
  };

  const logout = () => {
    if (token != null) {
      localStorage.removeItem("token");
    }
    setUser(initialState);
  };

  if (initialLoading) {
    return <FullPageSpinner />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used inside of Auth Provider");

  return context;
}

export { AuthProvider, useAuth };
