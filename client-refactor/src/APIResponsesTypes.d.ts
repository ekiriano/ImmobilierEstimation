export interface LoginAPIResponse {
  name: string;
  user_type: string;
  token: string;
  success: boolean;
}

export interface RegisterAPIResponse {
  name: string;
  user_type: string;
  password: string;
  email: string;
  data: Date;
  _id: string;
}

export interface DeleteResponse {
  success: boolean;
}

export type ErrorResponse =
  | null
  | {
      [x: string]: string;
    };

export interface ICurrentUser {
  id: string;
  name: string;
  email: string;
  user_type: string;
}
