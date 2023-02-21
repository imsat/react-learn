import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
  } from "../actions/types";
  import _omit from 'lodash/omit';
  import _mapKeys from 'lodash/mapKeys';

  export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._mapKeys(action.payload, 'id')} 
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload} 
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload}
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload}
        case DELETE_STREAM:
            return _omit(state, action.payload)
        default:
            return state
    }
  }