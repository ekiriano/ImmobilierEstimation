import isEmpty from "../validation/is-empty";

import {SET_CURRENT_ADRESS_COORDINATES} from "../actions/types";

const initialState = {
    coordinates : {
        longitude : 0,
        latitude : 0
    }
};


export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_ADRESS_COORDINATES:
        return {
          ...state,
          coordinates: action.payload,
        };
      default:
        return state;
    }
  }