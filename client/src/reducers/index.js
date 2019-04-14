import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import simpleMaisonReducer from "./simpleMaisonReducer";
import simpleAppartementReducer from "./simpleAppartementReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  simpleMaisons : simpleMaisonReducer,
  simpleAppartements : simpleAppartementReducer,
});
