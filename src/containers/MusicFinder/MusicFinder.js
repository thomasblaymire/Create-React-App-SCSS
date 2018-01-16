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
            error: false
        }
        this.updateInputValue = this.updateInputValue.bind(this)
    }

    componentDidMount() {
        this.props.onFetchEvents(this.state.searchTerm);
        console.log('Props on mount' + this.props.error);
    }

    updateInputValue(evt) {
        this.setState({searchTerm: evt.target.value});
        this.props.onFetchEvents(this.state.searchTerm);  
        console.log(this.props);
    }

    handleEventClick() {
        console.log('Clicked');
    }

    render() {
 
        let events = null;

        if(this.props.evts) {
            events = (
                <Utility>
                    <Events
                        handleEventClick={this.handleEventClick}
                        events={this.props.evts}
                        inputChanged={this.searchUpdated} />
                </Utility>
            );
        }

        return (
            <Utility>
                <div className={classes.Header}>
                    <div className={classes.HeaderContainer}>
                        <h3 className={classes.HeaderTitle}>Searh the latest events around the wolrd.</h3>
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
        onFetchEvents: () => dispatch(musicFinderActions.fetchEvents())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MusicFinder, axios);