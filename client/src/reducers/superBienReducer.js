import {GET_SUPER_SAVED_BIENS, NEW_SUPER_ESTIMATION_BIEN, DELETE_SUPER_SAVED_BIEN} from '../actions/types';

const initialState = {
    savedBiens : [],
    newEstimationBien : []
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_SUPER_SAVED_BIENS :
            return{
                ...state,
                savedBiens : action.payload
            };
        case DELETE_SUPER_SAVED_BIEN :
            return {
                ...state,
                savedBiens : state.savedBiens.filter(savedBien => savedBien._id !== action.payload)
            };
        case NEW_SUPER_ESTIMATION_BIEN :
        console.log("NEW_SUPER_ESTIMATION_BIEN");
            return{
                ...state,
                newEstimationBien : action.payload
            };

        default :
            return state;
    }
}
