import axios from 'axios';
import { SET_USER_TYPE_TO_SUPER , GET_ERRORS } from './types';

export const setUserTypeToSuper = user => dispatch => {
    axios.
    post("/api/users/upgradeto/super",user)
    .then(res => 
        dispatch({
            type : SET_USER_TYPE_TO_SUPER,
            payload : res.data
        })
    )
    .catch(err =>
        dispatch({
            type :  GET_ERRORS,
            payload : err.response.data
        })
    );
}