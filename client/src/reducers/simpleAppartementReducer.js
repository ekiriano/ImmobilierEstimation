import {GET_SIMPLE_SAVED_APPARTEMENTS, NEW_SIMPLE_ESTIMATION_APPARTEMENT, DELETE_SIMPLE_SAVED_APPARTEMENT} from '../actions/types';

const initialState = {
    savedAppartements : [],
    newEstimationAppartement : []
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_SIMPLE_SAVED_APPARTEMENTS :
            return{
                ...state,
                savedAppartements : action.payload
            };
        case DELETE_SIMPLE_SAVED_APPARTEMENT :
            return {
                ...state,
                savedAppartements : state.savedAppartements.filter(savedAppartement => savedAppartement._id !== action.payload)
            };
        case NEW_SIMPLE_ESTIMATION_APPARTEMENT :
            return{
                ...state,
                newEstimationAppartement : action.payload
            };

        default :
            return state;
    }
}
