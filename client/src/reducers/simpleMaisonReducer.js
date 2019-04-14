import {GET_SIMPLE_SAVED_MAISONS, DELETE_SIMPLE_SAVED_MAISON, NEW_SIMPLE_ESTIMATION_MAISON} from '../actions/types';

const initialState = {
    savedMaisons : [],
    newEstimationMaison : []
}

export default function(state = initialState , action){
    switch(action.type){
        case GET_SIMPLE_SAVED_MAISONS :
            return{
                ...state,
                savedMaisons : action.payload
            };
        case DELETE_SIMPLE_SAVED_MAISON :
            return{
                ...state,
                savedMaisons : state.savedMaisons.filter(savedMaison => savedMaison._id !== action.payload)
            };
        case NEW_SIMPLE_ESTIMATION_MAISON :
            return{
                ...state,
                newEstimationMaison : action.payload
            };

        default:
            return state;
        
    }
}