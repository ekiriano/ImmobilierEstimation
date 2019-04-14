import axios from "axios";
import { GET_ERRORS , GET_SIMPLE_SAVED_MAISONS, DELETE_SIMPLE_SAVED_MAISON , NEW_SIMPLE_ESTIMATION_MAISON  } from "./types";

export const submitDefaultMaison = defaultMaisonData => dispatch => {
  axios
    .post("/api/estimation/default/house", defaultMaisonData)
    .then(res => 
      dispatch({
        type : NEW_SIMPLE_ESTIMATION_MAISON,
        payload : res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const submitDefaultMaisonSave = defaultMaisonData => dispatch => {
  axios
    .post("/api/estimation/default/house/save", defaultMaisonData)
    .then(res => 
      dispatch({
        type : NEW_SIMPLE_ESTIMATION_MAISON,
        payload : res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
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
    dispatch({
      type : DELETE_SIMPLE_SAVED_MAISON,
      payload : id,
    })
  )
  .catch( err => 
      dispatch({
        type:GET_ERRORS,
        payload : err.response.data
      })
  );
}