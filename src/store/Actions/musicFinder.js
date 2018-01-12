import * as actionTypes from './actionTypes';
import axios from 'axios';


export const setEvents = (events) => {
    return {
        type: actionTypes.SET_EVENTS,
        events: events
    }
}

export const fetchEventsFailed = () => {
    return {
        type: actionTypes.FETCH_EVENTS_FAILED
    }
}

export const fetchMovies = (movie) => {
    return dispatch => {
        axios.get('MOVIEAPIURL')
        .then(response => {
            dispatch(setEvents(response.data))
        } )
        .catch( error => {
            dispatch(fetchEventsFailed());
        } );
    };
};