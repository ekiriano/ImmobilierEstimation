import axios from "axios";
import {GET_ERRORS,GET_SIMPLE_SAVED_APPARTEMENTS, NEW_SIMPLE_ESTIMATION_APPARTEMENT, DELETE_SIMPLE_SAVED_APPARTEMENT} from "./types";


export const submitDefaultAppartement = defaultAppartementData => dispatch => {
  axios
    .post("/api/estimation/default/appartement", defaultAppartementData)
    .then(res => 
      dispatch({
        type : NEW_SIMPLE_ESTIMATION_APPARTEMENT,
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

export const submitDefaultAppartementSave = defaultAppartementData => dispatch => {
  axios
    .post("/api/estimation/default/appartement/save", defaultAppartementData)
    .then(res =>
      dispatch({
        type : NEW_SIMPLE_ESTIMATION_APPARTEMENT,
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
  .delete(``)
  .then(res =>
    dispatch({
      type: DELETE_SIMPLE_SAVED_APPARTEMENT,
      payload : id,
    })
  )
  .catch(err =>
    dispatch({
      type:GET_ERRORS,
      payload : err.response.data
    })
  );
}