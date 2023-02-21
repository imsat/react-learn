import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import authReducher from "./authReducher";
import streamReducher from "./streamReducher";

export default combineReducers({
    auth: authReducher,
    streams: streamReducher,
    form: formReducer,
})