import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../action";

const initialState = []

export const favoriteReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
        return [...state, action.payload].filter((val,id,array) => array.indexOf(val) == id);

        case REMOVE_FROM_FAVORITE:
        return state.filter(item => item.id !== action.payload.id)

        default:
            return state;
    }
}