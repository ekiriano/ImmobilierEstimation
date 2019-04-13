import axios from "axios";
import { GET_ERRORS } from "./types";

export const submitDefaultAppartement = AppartementData => dispatch => {
  axios
    .post("/api/estimation/default/appartement", AppartementData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const submitDefaultAppartementSave = AppartementData => dispatch => {
  axios
    .post("/api/estimation/default/appartement/save", AppartementData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getSavedAppartement = dispatch => {
  axios.get("")
};
