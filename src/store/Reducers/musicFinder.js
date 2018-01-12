import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    events: null,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.setEvents:
        return {
            ...state,
            events: {
                name: action.events.name,
                description: action.events.description,
                location: action.events.location,
                image: action.events.image
            },
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