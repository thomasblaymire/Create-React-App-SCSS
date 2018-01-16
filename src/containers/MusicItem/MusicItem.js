import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as musicFinderActions from '../../store/actions/index';

class MusicItem extends Component {

    state = {
        singleEvents: [],
        error: false,
        eventId: ''
    }

    componentDidMount() {
        this.setState({eventId: this.props.match.params.id});
        this.props.onFetchSingleEvent(this.state.eventId);
    }

    render() {
        console.log(this.props);
       

        return (

            // <div>
            //     <h3>{this.props.singleEvent.name}</h3>
            // </div>

            // <div>
            //     {this.props.singleEvent.map(event => (
            //         <h3>{this.props.singleEvent.name}</h3>
            //     ))}
            // </div>
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        singleEvent: state.musicFinder.event
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchSingleEvent: (eventId) => dispatch(musicFinderActions.fetchSingleEvent(eventId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicItem);