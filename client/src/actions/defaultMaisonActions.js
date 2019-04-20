import axios from "axios";
import { GET_ERRORS , GET_SIMPLE_SAVED_MAISONS, DELETE_SIMPLE_SAVED_MAISON , NEW_SIMPLE_ESTIMATION_MAISON  } from "./types";
import {toast} from 'react-toastify';


export const submitDefaultMaison = defaultMaisonData => dispatch => {
  axios
    .post("/api/estimation/default/house", defaultMaisonData)
    .then(res => 
      {
        dispatch({
          type : NEW_SIMPLE_ESTIMATION_MAISON,
          payload : res.data
        })
        toast.success("Votre maison a été estimmée avec succés");
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

export const submitDefaultMaisonSave = defaultMaisonData => dispatch => {
  axios
    .post("/api/estimation/default/house/save", defaultMaisonData)
    .then(res => 
      {
        dispatch({
          type : NEW_SIMPLE_ESTIMATION_MAISON,
          payload : res.data
        })
        toast.success("Votre maison a été estimmée et sauvegardée  avec succès");
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

export const getSavedMaisons = () => dispatch => {
  axios
  .get("/api/estimation/default/maisons/saved")
  .then(res => 
    dispatch({
      type : GET_SIMPLE_SAVED_MAISONS,
      payload : res.data
    })
  )
  .catch( err => 
    dispatch({
      type: GET_SIMPLE_SAVED_MAISONS,
      payload:null
    })
  );
};

// delete saved estimation 
export const deleteSavedMaison = id => dispatch => {
  axios
  .delete(`/api/estimation/default/maisons/saved/${id}`)
  .then(res =>
    {
    dispatch({
      type : DELETE_SIMPLE_SAVED_MAISON,
      payload : id,
    })
    toast.warn("Votre Estimation a été suprimée avec succes ! ")
  }
  )
  .catch( err => 
    {
      dispatch({
        type:GET_ERRORS,
        payload : err.response.data
      })
      toast.error("Une Erreur a eu lieu lors de la suppression de cette estimmation : Veuillez réessayer plus tard");
    }
  );
}