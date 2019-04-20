import axios from "axios";
import {SET_CURRENT_ADRESS_COORDINATES} from "./types";


export const setCoordinates = (long , lat) => {
    return {
        type : SET_CURRENT_ADRESS_COORDINATES,
        payload  : 
        {
            longitude : long , 
            latitude : lat
        } 
    }
}