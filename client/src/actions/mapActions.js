
import axios from "axios";
import {SET_CURRENT_ADRESS_COORDINATES} from "./types";


export const setCoordinates = (latlong) => {
    return {
        type : SET_CURRENT_ADRESS_COORDINATES,
        payload  : 
        {
            
                longitude : latlong.lng,
                latitude : latlong.lat
        }
        }
}
