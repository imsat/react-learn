import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import authReducher from "./authReducher";

export default combineReducers({
    auth: authReducher,
    form: formReducer
})