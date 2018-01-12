import {connect} from 'react-redux';
import axios from 'axios';
import React, { Component } from 'react';

import * as musicActions from '../../store/actions/index';
import Search from '../../components/Search/Search';
import Utility from '../../hoc/Utility/Utility';
import Events from '../../components/Events/Events';

class MusicFinder extends Component {


    componentDidMount() {
        console.log(this.props);
        this.props.onInitEvents();
    }

    render() {

        let event = ''; // Make this into an error handler when no events found.

        if(this.props.events) {
            event = (
                <Utility>
                    <Events
                        events={this.props.events} />
                </Utility>
            );
        }

        return (
            <Utility>
                <Search />
                {event}
                

            </Utility>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitEvents: () => dispatch(musicActions.initEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicFinder, axios);