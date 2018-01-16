import * as actionTypes from './actionTypes';
import axios from 'axios';

const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
const API_KEY = "RK1RVG7Twn245zul4fNP4E3HuhsP7Lk1";
const TERM = 'fast ';


export const fetchEventsFailed = () => {
    return {
        type: actionTypes.FETCH_EVENTS_FAILED
    }
}

// Somehow get access to the input value
export const fetchEvents = () => {
    console.log('- Fetch Events Called')

    return dispatch => {
        axios.get(`${ROOT_URL}keyword=${TERM}&countryCode=GB&apikey=${API_KEY}`)
        .then(response => {
            console.log('[actions.js events]' + response.data._embedded.events);
            // dispatch( events: response.data._embedded.events);
        } )
        .catch( error => {
           dispatch(fetchEventsFailed());
        } );
    };
};