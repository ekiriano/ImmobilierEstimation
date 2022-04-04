import { loginParams, registerParams } from "./AuthService";
import { http } from "../../utils/http.util";

export class AuthService {
  async login(params: loginParams) {
    return http.post("/users/login", {
      email: params.email,
      password: params.password,
    });
  }

  async register(params: registerParams) {
    return http.post("/users/register", {
      name: params.name,
      email: params.email,
      password: params.password,
      passwordConfirmation: params.passwordConfirmation,
    });
  }

  async getCurrentUser() {
    return http.get("/users/current");
  }
}
