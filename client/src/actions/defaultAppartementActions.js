import axios from "axios";
import {GET_ERRORS,GET_SIMPLE_SAVED_APPARTEMENTS, NEW_SIMPLE_ESTIMATION_APPARTEMENT, DELETE_SIMPLE_SAVED_APPARTEMENT} from "./types";
import {toast} from 'react-toastify';

export const submitDefaultAppartement = defaultAppartementData => dispatch => {
  axios
    .post("/api/estimation/default/appartement", defaultAppartementData)
    .then(res => 
      {
        dispatch({
          type : NEW_SIMPLE_ESTIMATION_APPARTEMENT,
          payload : res.data
        })
        toast.success("Votre appartement a été estimmé avec succés");
      }
    )
    .catch(err =>
      {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
        toast.error("Erreur lors de l'estimmation : Veuillez corriger les erreurs indiquées !")
      }
    );
};

export const submitDefaultAppartementSave = defaultAppartementData => dispatch => {
  axios
    .post("/api/estimation/default/appartement/save", defaultAppartementData)
    .then(res =>
      {
        dispatch({
          type : NEW_SIMPLE_ESTIMATION_APPARTEMENT,
          payload : res.data
        })
        toast.success("Votre appartment a été estimmé et sauvegardé  avec succés");
      }  
    )
    .catch(err =>
      {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
        toast.error("Erreur lors de l'estimmation : Veuillez corriger les erreurs indiquées !")
      }
    );
};

export const getSavedAppartements = () => dispatch => {
  axios
  .get("/api/estimation/default/appartements/saved")
  .then(res =>
    dispatch({
      type : GET_SIMPLE_SAVED_APPARTEMENTS,
      payload : res.data
    })
  )
  .catch(err => 
    dispatch({
      type : GET_SIMPLE_SAVED_APPARTEMENTS,
      payload : null
    })
  );
};

//deleted saved estimation

export const deleteSavedAppartement = id => dispatch => {
  axios
  .delete(`/api/estimation/default/appartements/saved/${id}`)
  .then(res =>
    {
      dispatch({
        type: DELETE_SIMPLE_SAVED_APPARTEMENT,
        payload : id,
      })
      toast.warn("Votre Estimation a été suprimée avec succes ! ")
    }
  )
  .catch(err =>
    {
      dispatch({
        type:GET_ERRORS,
        payload : err.response.data
      })
      toast.error("Une Erreur a eu lieu lors de la suppression de cette estimmation : Veuillez réessayer plus tard");
    }
  );
}