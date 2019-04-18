import axios from 'axios';

export const setUserTypeToSuper = user => dispatch => {
    axios.
    post("/api/users/upgradeto/super",user)
    .then(res => 
        console.log(res)
    )
    .catch(err =>
        console.log(err)
    );
}