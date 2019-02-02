import { combineReducers } from 'redux'
import dataReducer from './dataReducer';
import groceryReducer from './groceryReducer';
import { favoriteReducer } from './favoriteReducer';
import { reducer as formReducer } from 'redux-form'
import { usersReducer } from './usersRedycer';

export const rootReducer= combineReducers({
    jsonData : dataReducer,
    grocery : groceryReducer,
    favorite : favoriteReducer,
    form: formReducer, 
    users : usersReducer
})
export default rootReducer