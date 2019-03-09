import axios from "axios";
import { GET_ERRORS } from "./types";

export const submitDefaultMaison = defaultMaisonData => dispatch => {
  axios
    .post("api/estimation/default/appartment", defaultMaisonData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
