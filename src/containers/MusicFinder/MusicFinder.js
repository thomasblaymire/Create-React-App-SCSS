import {connect} from 'react-redux';
import axios from 'axios';
import React, { Component } from 'react';

import * as musicActions from '../../store/Actions/index';
import Search from '../../components/Search/Search';
import Utility from '../../hoc/Utility/Utility';
import Events from '../../components/Events/Events';

class MusicFinder extends Component {

    state = {
        events: [],
        error: false
    }

    componentDidMount() {
        const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
        const API_KEY = "RK1RVG7Twn245zul4fNP4E3HuhsP7Lk1";
        const TERM = 'acdc';        

        axios.get(`${ROOT_URL}keyword=${TERM}&countryCode=GB&apikey=${API_KEY}`)
        .then(response => {
            console.log(response.data._embedded.events);
            this.setState( { events: response.data._embedded.events } );
        } )
        .catch( error => {
            this.setState({ error: true });
        } );
    }


    render() {

        let event = ''; // Make this into an error handler when no events found.

        if(this.state.events) {
            event = (
                <Utility>
                    <Events
                        events={this.state.events} />
                </Utility>
            );
        }

        return (
            <Utility>
                {<Search />}

                {event}

            </Utility>
        );
    }
}

const mapStateToProps = state => {
    return {
        // events: state.events,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onFetchEvents: () => dispatch(musicActions.fetchEvents())
    }
}

/* 

Could not find "store" in either the context or props of "Connect(MusicFinder)". 
Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(MusicFinder)".

*/

export default MusicFinder;