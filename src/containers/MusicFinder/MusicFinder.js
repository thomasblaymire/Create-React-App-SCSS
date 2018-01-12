import {connect} from 'react-redux';
import axios from 'axios';
import React, { Component } from 'react';

import * as musicActions from '../../store/actions/index';
import Search from '../../components/Search/Search';
import Utility from '../../hoc/Utility/Utility';

class MusicFinder extends Component {
    render() {
        return (
            <Utility>
                <Search />
                Results 
                Navigation -- Logo
                

            </Utility>
        );
    };
}

mapStateToProps(state) {
    return {
        events: this.state.events; // change this
    }
}

export default connect(mapStateToProps)(MusicFinder);