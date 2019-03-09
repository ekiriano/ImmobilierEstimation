import axios from "axios";

export const submitDefaultMaison = (defaultMaisonData) => dispatch => {
    axios
    .post("api/estimation/default/appartment" , defaultMaisonData)
    .then(res => console.log(res.data));
}