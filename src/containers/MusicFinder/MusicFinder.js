import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Events from '../../components/Events/Events';
import Search from '../../components/Search/Search';
import Utility from '../../hoc/Utility/Utility';
import classes from './MusicFinder.scss';

import * as musicFinderActions from '../../store/actions/index';

class MusicFinder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: '',
            error: false,
            searchStatus: 'All events'
        }
        this.updateInputValue = this.updateInputValue.bind(this)
    }

    componentDidMount() {
        this.props.onFetchEvents();
    }

    updateInputValue(evt) {
        this.setState({searchTerm: evt.target.value});

        if (evt.target.value === '') {
            this.props.onFetchEvents();
        }  

        this.props.onFetchEvents(this.state.searchTerm); 
        this.setState({searchStatus: 'Custom events'});
    }


    render() {

        let events = null;

        if(this.props.evts) {
            events = (
                <Utility>
                    <h3 className={classes.EventTitleStatus}>{this.state.searchStatus}</h3>
                    <Events
                        events={this.props.evts}
                        inputChanged={this.searchUpdated} />
                </Utility>
            );
        }

        return (
            <Utility>
                <div className={classes.Header}>
                    <div className={classes.HeaderContainer}>
                        <h3 className={classes.HeaderTitle}>Share something incredible.</h3>
                        <span className={classes.HeaderSubtitle}>Find an event near you.</span>
                        <Search
                        onInputChange={this.updateInputValue}
                        searchTerm={this.state.searchTerm} />
                        <button className={classes.HeaderButton}>Search</button>
                    </div>
                </div>
                {events}
            </Utility>
        );
    }
}

const mapStateToProps = state => {
    return {
        evts: state.musicFinder.events,
        error: state.musicFinder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchEvents: (searchTerm) => dispatch(musicFinderActions.fetchEvents(searchTerm))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MusicFinder, axios);