import * as actionTypes from '../actions/actionTypes';

const initialState = {
    events: null,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_EVENTS:
        return {
            ...state,
            // We set this mapping up within the setEvents action 
            events: action.events,
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