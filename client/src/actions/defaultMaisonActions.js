import axios from "axios";
import { GET_ERRORS } from "./types";

export const submitDefaultMaison = defaultMaisonData => dispatch => {
  axios
    .post("api/estimation/default/house", defaultMaisonData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const submitDefaultMaisonSave = defaultMaisonData => dispatch => {
  axios
    .post("api/estimation/default/house/save", defaultMaisonData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getSavedMaison = dispatch => {

}
