import { combineReducers } from "redux";

import authReducher from "./authReducher";

export default combineReducers({
    auth: authReducher
})