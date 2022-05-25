import { loginParams, registerParams } from "./AuthService";
import { http } from "../../utils/http.util";
import {
  ICurrentUser,
  LoginAPIResponse,
  RegisterAPIResponse,
} from "../../APIResponsesTypes";

export class AuthService {
  async login(params: loginParams) {
    return http.post<LoginAPIResponse>("/users/login", {
      email: params.email,
      password: params.password,
    });
  }

  async register(params: registerParams) {
    return http.post<RegisterAPIResponse>("/users/register", {
      name: params.name,
      email: params.email,
      password: params.password,
      passwordConfirmation: params.passwordConfirmation,
    });
  }

  async getCurrentUser() {
    return http.get<ICurrentUser>("/users/current");
  }
}
