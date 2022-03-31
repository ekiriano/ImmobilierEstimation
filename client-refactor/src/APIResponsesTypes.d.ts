interface IUser {
  id: number;
  name: string;
  user_type: string;
}
export interface loginAPIResponse {
  payload: IUser;
  token: string;
  success: boolean;
}
