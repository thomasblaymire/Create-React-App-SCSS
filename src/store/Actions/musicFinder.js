import * as actionTypes from "./actionTypes";
import axios from "axios";

const API_KEY = "RK1RVG7Twn245zul4fNP4E3HuhsP7Lk1";

export const fetchEventsFailed = () => {
  return {
    type: actionTypes.FETCH_EVENTS_FAILED
  };
};

export const setEvents = events => {
  return {
    type: actionTypes.SET_EVENTS,
    events: events
  };
};

// Pass the call the searchTerm from the container
export const fetchEvents = searchTerm => {
  const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
  const TERM = searchTerm;

  return dispatch => {
    axios
      .get(`${ROOT_URL}keyword=${TERM}&countryCode=GB&apikey=${API_KEY}`)
      .then(response => {
        console.log(response.data._embedded.events);
        dispatch(setEvents(response.data._embedded.events));
      })
      .catch(error => {
        dispatch(fetchEventsFailed());
      });
  };
};

// https://app.ticketmaster.com/discovery/v2/events/G5vHZ4em3UsuXjson?&countryCode=GB&apikey=RK1RVG7Twn245zul4fNP4E3HuhsP7Lk1
// https://app.ticketmaster.com/discovery/v2/events/1AdfZ4eGkRb7M51.json?apikey=RK1RVG7Twn245zul4fNP4E3HuhsP7Lk1

export const setSingleEvent = event => {
  return {
    type: actionTypes.GET_SINGLE_EVENT,
    event: event
  };
};

export const fetchSingleEvent = eventId => {

    console.log('fetchSingleEventAction ' + eventId);
    const ID = eventId;

  return dispatch => {
    axios
      .get(`https://app.ticketmaster.com/discovery/v2/events/${ID}.json?&apikey=${API_KEY}`)
      .then(response => {
        console.log(response.data);
        dispatch(setSingleEvent(response.data));
      })
      .catch(error => {
        dispatch(fetchEventsFailed());
      });
  };
};
