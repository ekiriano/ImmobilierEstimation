const storage = {
  getToken: () => {
    return localStorage.getItem("token") as string;
  },
  setToken: (token: string) => {
    localStorage.setItem("token", token);
  },
  clearToken: () => {
    localStorage.removeItem("token");
  },
};

export default storage;
