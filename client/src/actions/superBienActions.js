import axios from "axios";
import {
  GET_ERRORS,
  GET_SUPER_SAVED_BIENS,
  NEW_SUPER_ESTIMATION_BIEN,
  DELETE_SUPER_SAVED_BIEN
} from "./types";

import { toast } from "react-toastify";

export const submitSuperBienSave = superBienData => dispatch => {
  axios
    .post("/api/estimation/super/bien/save", superBienData)
    .then(res => {
      dispatch({
        type: NEW_SUPER_ESTIMATION_BIEN,
        payload: res.data
      });
      toast.success("Votre bien a été estimmé et sauvegardé avec succés");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      toast.error(
        "Erreur lors de l'estimmation : Veuillez corriger les erreurs indiquées !"
      );
    });
};

export const getSavedBiens = () => dispatch => {
  axios
    .get("/api/estimation/super/biens/saved")
    .then(res =>
      dispatch({
        type: GET_SUPER_SAVED_BIENS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SUPER_SAVED_BIENS,
        payload: null
      })
    );
};

//deleted saved estimation

export const deleteSavedBien = id => dispatch => {
  axios
    .delete(`/api/estimation/super/biens/saved/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_SUPER_SAVED_BIEN,
        payload: id
      });
      toast.warn("Votre Estimation a été suprimée avec succès ! ");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      toast.error(
        "Une Erreur a eu lieu lors de la suppression de cette estimmation : Veuillez réessayer plus tard"
      );
    });
};
