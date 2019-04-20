import axios from "axios";
import setAuthToken from "../utilities/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import {toast} from 'react-toastify';


export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => 
      {
        toast.success("Votre compte a été crée avec succes , Veuillez vous connecter! ");
        history.push("/login");
      }
    ) // success
    .catch((
      err //error
    ) =>
    {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
      toast.error("Erreur lors de l'inscription : Veuillez corriger les erreurs indiquées !")
    }
    );
};

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //TODO save to secure cookie instead
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      toast.success("Connection Reussie");
    })
    .catch(err =>
      {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
        toast.error("Erreur lors de la connection  : Veuillez corriger les erreurs indiquées !")
      }
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  toast.error("Deconnecté ...");
};

