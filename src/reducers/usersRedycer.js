import { FETCH_USERS } from "../action";
import { LOADING } from '../action';

const initialState = {
    users:[],
    loading:false
}


export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USERS: 
            return { users:action.payload, loading:false}
        case LOADING:
            return {loading:true}

        default:
           return state
    }
}