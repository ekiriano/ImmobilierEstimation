import axios from "axios";
import {GET_ERRORS,GET_SUPER_SAVED_BIENS, NEW_SUPER_ESTIMATION_BIEN, DELETE_SUPER_SAVED_BIEN} from "./types";


export const submitSuperBienSave = superBienData => dispatch => {
  axios
    .post("/api/estimation/super/bien/save", superBienData)
    .then(res =>
      dispatch({
        type : NEW_SUPER_ESTIMATION_BIEN,
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

export const getSavedBien = () => dispatch => {
  axios
  .get("/api/estimation/super/biens/saved")
  .then(res =>
    dispatch({
      type : GET_SUPER_SAVED_BIENS,
      payload : res.data
    })
  )
  .catch(err =>
    dispatch({
      type : GET_SUPER_SAVED_BIENS,
      payload : null
    })
  );
};

//deleted saved estimation

export const deleteSavedBien = id => dispatch => {
  axios
  .delete(`/api/estimation/super/bien/saved/${id}`)
  .then(res =>
    dispatch({
      type: DELETE_SUPER_SAVED_BIEN,
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
