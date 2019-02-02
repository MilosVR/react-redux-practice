import { ADD_USER, EDIT_USER, DELETE_USER} from "../action";

const initialState = [
    {id:11, name:"Milos", age:30, balance:12321},
    {id:12, name:"Kika", age:27, balance:23123},
    {id:13, name:"Milan", age:28, balance:43433}
]


export const dataReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_USER:
        return [...state, action.payload]    
        
        case EDIT_USER:
        return state.map(item => item.id === action.payload.id ? action.payload : item)

        case DELETE_USER:
        return state.filter(item => item.id !== action.payload.id)

        default:
        return state 
    }
}
export default dataReducer