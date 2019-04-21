import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import simpleMaisonReducer from "./simpleMaisonReducer";
import simpleAppartementReducer from "./simpleAppartementReducer";
import mapReducer from "./mapReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  simpleMaisons : simpleMaisonReducer,
  simpleAppartements : simpleAppartementReducer,
  map : mapReducer,
});
