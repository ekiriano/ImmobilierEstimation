import axios from "axios";
import { GET_ERRORS } from "./types";

export const submitAppartement = AppartementData => dispatch => {
  axios
    .post("api/estimation/default/appartement", AppartementData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const submitAppartementSave = AppartementData => dispatch => {
  axios
    .post("api/estimation/default/house/appartement", AppartementData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
