import { ReactNode, useContext, useState } from "react";
import {
  loginParams,
  registerParams,
} from "../services/AuthService/AuthService";
import { AuthService } from "../services/AuthService/auth.service";
import { createContext } from "react";
/* eslint-disable */
interface IState {
  name: string;
  type: string;
  isLoggedIn: boolean;
}

const initialState: IState = {
  name: "",
  type: "",
  isLoggedIn: false,
};


interface AuthContextType {
  state: IState;
  setState: (state: IState) => void;
  token?: string;
  login: (params: loginParams) => Promise<void>;
  logout: () => void;
  register: (params: registerParams) => Promise<void>;
}

const authCtxDefaultValue = {
  state: initialState,
  setState: (state: IState) => {},
  token: null,
  login: () => {},
  register: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(initialState);
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  const auth = new AuthService();

  const handleLoginResponse = ({data} : {data: any}) => {
    setToken(data.token)
    setState(
      {
        name: data.name,
        type: data.use_type,
        isLoggedIn: true
      }
    )
    localStorage.setItem("token", data.token);

    window.location.href = "/";
  }

  const login = (params: loginParams) => {
     return auth
      .login(params)
      .then(handleLoginResponse)
  };

  const register = (params: registerParams) => {
    return auth
      .register(params)
      .then((response) => {
        console.log(response.status);
      })
  };

  const logout = async () => {
    if (token != null) {
      localStorage.removeItem("token");
    }
    setState(initialState);
  };

  return (
    <AuthContext.Provider
      value={{ state, setState, login, register, logout }}
    >
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
