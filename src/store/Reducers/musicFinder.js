import * as actionTypes from '../actions/actionTypes';

const initialState = {
    events: null,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_EVENTS:
        return {
            ...state,
            error: false
        };
        case actionTypes.FETCH_EVENTS_FAILED:
        return {
            ...state,
            error: true
        };
        default: 
            return state;
    }
};

export default reducer;