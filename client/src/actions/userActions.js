import axios from "axios";
import { SET_USER_TYPE_TO_SUPER, GET_ERRORS } from "./types";
import { toast } from "react-toastify";

export const setUserTypeToSuper = user => dispatch => {
  axios
    .post("/api/users/upgradeto/super", user)
    .then(res => {
      dispatch({
        type: SET_USER_TYPE_TO_SUPER,
        payload: res.data
      });
      toast.success(
        "Félicitation vous êtes desormais un uttilisateur premium !"
      );
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: { erreur: "erreur paypal try again" }
      });
      toast.error(
        "Erreur lors de l'upgrade de votre compte : Veuillez essayer plus tard!"
      );
    });
};
