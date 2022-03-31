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

type authErrors = {
  [key: string]: string
}

interface AuthContextType {
  state: IState;
  authErrors: authErrors
  setAuthErrors: (state: authErrors) => void;
  token?: string;
  login: (params: loginParams) => void;
  logout: () => void;
  register: (params: registerParams) => void;
}

const authCtxDefaultValue = {
  state: initialState,
  authErrors: {},
  setAuthErrors: (state: authErrors) => {},
  token: "",
  login: () => {},
  register: () => {},
  logout: () => {},
}



const AuthContext = createContext<AuthContextType>(authCtxDefaultValue);

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(initialState);
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  const [authErrors, setAuthErrors] = useState(authCtxDefaultValue.authErrors);
  const auth = new AuthService();
  const login = (params: loginParams) => {
    
    auth
      .login(params)
      .then((response) => {
        const token: string = response.data.token;
        setToken(token);
        setState((previousState) => {
          return {
            ...previousState,
            name: response.data.name,
            type: response.data.user_type,
            isLoggedIn: true,
          };
        });
        localStorage.setItem("token", token);
        //window.location.href = "/";
      })
      .catch((error) => {
        setAuthErrors(error.response.data);
      });
  };

  const register = (params: registerParams) => {
    auth
      .register(params)
      .then((response) => {
        console.log(response.status);
         })
      .catch((error) => {
        console.log(error); setAuthErrors(error.response.data) });
  };

  const logout = () => {
    if (token) {
      localStorage.removeItem("token");
    }
    setState((previousState) => {
      return { ...previousState, isLoggedIn: false };
    });
  };

  return (
    <AuthContext.Provider value={{ state, authErrors, setAuthErrors, login, register, logout,  }}>
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
