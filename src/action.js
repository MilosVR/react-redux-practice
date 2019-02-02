import axiosBaseUrl1 from "./axiosBaseUrl1";

export const ADD_USER = "ADD_USER"
export const EDIT_USER = "EDIT_USER"
export const DELETE_USER = 'DELETE_USER'
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'
export const FETCH_USERS = "FETCH_USERS"
export const LOADING = "LOADING"

export const addUser = newUser => {
    return {
        type:ADD_USER,
        payload:newUser
    }
}
export const editUsers = editUser => {
    return {
        type:EDIT_USER,
        payload:editUser
    }
}
export const deleteUser = deletedUser => {
    return {
        type:DELETE_USER,
        payload:deletedUser
    }
}
export const addToFavorite = favorite => {
    return {
        type:ADD_TO_FAVORITE,
        payload:favorite
    }
}
export const removeFromFavorite = favorite => {
    return {
        type:REMOVE_FROM_FAVORITE,
        payload:favorite
    }
}
export const fetchUsers = users => {
    return {
        type: FETCH_USERS,
        payload : users
    }
}
export const loading = () => {
    return {
        type: LOADING,
    }
}
export const fetchingUsers = () => async dispatch => {
    const request = await axiosBaseUrl1.get('/users');
    dispatch(loading())
    dispatch(fetchUsers(request.data))
}