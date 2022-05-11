import { ReactNode, useContext, useState } from "react";
import {
  loginParams,
  registerParams,
} from "../services/AuthService/AuthService";
import { AuthService } from "../services/AuthService/auth.service";
import { createContext } from "react";
import { LoginAPIResponse } from "../APIResponsesTypes";

interface IUser {
  name: string;
  type: string;
  isLoggedIn: boolean;
}

const initialState: IUser = {
  name: "",
  type: "",
  isLoggedIn: false,
};

interface AuthContextType {
  user: IUser;
  setUser: (user: IUser) => void;
  token?: string;
  login: (params: loginParams) => Promise<void>;
  logout: () => void;
  register: (params: registerParams) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);
AuthContext.displayName = "AuthContext";

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(initialState);
  const [token, setToken] = useState<string>("");
  const auth = new AuthService();

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

    window.location.href = "/dashboard";
  };

  const login = (params: loginParams) => {
    return auth.login(params).then(handleLoginResponse);
  };

  const register = (params: registerParams) => {
    return auth.register(params).then((response) => {
      console.log(response.status);
    });
  };

  const logout = () => {
    if (token != null) {
      localStorage.removeItem("token");
    }
    setUser(initialState);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used inside of Auth Provider");

  return context;
}

export { AuthProvider, useAuth };
