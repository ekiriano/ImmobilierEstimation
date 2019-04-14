import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import simpleMaisonReducer from "./simpleMaisonReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  simpleMaisons : simpleMaisonReducer,
});
