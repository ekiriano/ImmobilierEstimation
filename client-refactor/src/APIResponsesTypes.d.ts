export interface LoginAPIResponse {
  name: string;
  user_type: string;
  token: string;
  success: boolean;
}

export interface DeleteResponse {
  success: boolean;
}

export type ErrorResponse = {
  [x: string]: string;
};

export interface ICurrentUser {
  id: string;
  name: string;
  email: string;
  user_type: string;
}
