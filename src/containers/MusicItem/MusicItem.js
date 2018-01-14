import React, {Component} from 'react';
import EventItem from '../../components/Events/EventItem/EventItem';
import axios from 'axios';

class MusicItem extends Component {

    state = {
        singleEvents: [],
        error: false
    }

    componentDidMount() {
        // Do a HTTP call with the id from the URL
        const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
        const API_KEY = "RK1RVG7Twn245zul4fNP4E3HuhsP7Lk1";
        const TERM = this.props.match.params.id      

        axios.get(`${ROOT_URL}id=${TERM}&countryCode=GB&apikey=${API_KEY}`)
        .then(response => {
            console.log(response.data._embedded.events);
            console.log('HIT' + response.data_embedded.events);
            this.setState({singleEvents: response.data._embedded.events})
        
        } )
        .catch( error => {
            this.setState({ error: true });
        } );
    }

    render() {
        return (
            <div>
                Map over each single event events and show the dates / info / fancy stuff 
            </div>
        )
    }
}

export default MusicItem;