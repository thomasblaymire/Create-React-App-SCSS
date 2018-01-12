import * as actionTypes from './actionTypes';
import axios from 'axios';

const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
const API_KEY = "RK1RVG7Twn245zul4fNP4E3HuhsP7Lk1";
const TERM = 'ed sheeran';

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

export const fetchEvents = (movie) => {
    return dispatch => {
        axios.get(`${ROOT_URL}keyword=${TERM}&countryCode=GB&apikey=${API_KEY}`)
            .then(response => {
                console.table(response);
                dispatch(setEvents(response.data))
            } )
            .catch( error => {
                dispatch(fetchEventsFailed());
            } );
    };
};