import {connect} from 'react-redux';
import axios from 'axios';
import React, { Component } from 'react';

import * as musicActions from '../../store/Actions/index';
import Search from '../../components/Search/Search';
import Utility from '../../hoc/Utility/Utility';
import Events from '../../components/Events/Events';
import classes from './MusicFinder.scss';

class MusicFinder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
            searchTerm: '',
            error: false
        }
        this.updateInputValue = this.updateInputValue.bind(this)
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents(){
        const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
        const API_KEY = "RK1RVG7Twn245zul4fNP4E3HuhsP7Lk1";
        const TERM = this.state.searchTerm;        

        axios.get(`${ROOT_URL}keyword=${TERM}&countryCode=GB&apikey=${API_KEY}`)
        .then(response => {
            console.log(response.data._embedded.events);
            this.setState( { events: response.data._embedded.events } );
        } )
        .catch( error => {
            this.setState({ error: true });
        } );
    }

    updateInputValue(evt) {
        this.setState({searchTerm: evt.target.value});
        this.getEvents();
    }

    render() {
        let event = ''; // Make this into an error handler when no events found.

        if(this.state.events) {
            event = (
                <Utility>
                    <Events
                        events={this.state.events}
                        inputChanged={this.searchUpdated} />
                </Utility>
            );
        }

        return (
            <Utility>
                <div className={classes.Header}>
                    <Search
                        onInputChange={this.updateInputValue}
                        searchTerm={this.state.searchTerm} />
                </div>
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


export default MusicFinder;