import * as actionTypes from './actionTypes';
import axios from 'axios';

const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
const API_KEY = "RK1RVG7Twn245zul4fNP4E3HuhsP7Lk1";


export const fetchEventsFailed = () => {
    return {
        type: actionTypes.FETCH_EVENTS_FAILED
    }
}

export const setEvents = (events) => {
    console.log('Set events' + events);
    return {
        type: actionTypes.SET_EVENTS,
        events: events
    }
}
 
// Pass the call the searchTerm from the container 
export const fetchEvents = () => {
    return dispatch => {
        axios.get(`${ROOT_URL}keyword=five&countryCode=GB&apikey=${API_KEY}`)
        .then(response => {
            console.log('[Actions.js events]' + response.data._embedded.events);
            dispatch(setEvents(response.data._embedded.events));
        } )
        .catch( error => {
           dispatch(fetchEventsFailed());
        } );
    };
};