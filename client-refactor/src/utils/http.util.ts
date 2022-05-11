import axios, { AxiosRequestConfig } from "axios";

const http = axios.create({ baseURL: "http://localhost:3000/api" });
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token: string | null = localStorage.getItem("token");
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
      localStorage.clear();
      //window.location.href = "/login"
      return Promise.reject({ message: "Please re-authenticate ta mère!" });
    }
  }
);

export { http };
