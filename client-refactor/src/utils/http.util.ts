import axios, { AxiosRequestConfig } from "axios";
import storage from "./storage";

const http = axios.create({ baseURL: "http://localhost:3000/api" });
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token: string | null = storage.getToken();
    if (token) {
      config.headers ? (config.headers.Authorization = token) : "";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* 
  ecrire un intercepteur , verifier la validity du token et redirect si il est pas bon 
  clear localstorage puis redirect 
  status 401 -> unauthorized, 
  token : TTL nombre en s de vie du token 

*/

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: { response: { status: number } }) {
    if (error.response.status === 401) {
      storage.clearToken();
      window.location.href = "/login";
      return Promise.reject({ message: "Please re-authenticate ta mère!" });
    }

    return Promise.reject(error);
  }
);

export { http };
