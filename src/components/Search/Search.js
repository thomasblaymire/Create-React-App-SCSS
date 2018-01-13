import React, {Component} from 'react';

import classes from './Search.scss';

class Search extends Component {

    render() {
        return (
            <div className={classes.Search}>
             <input 
                placeholder="Please search for an event"
                value={this.props.inputValue} 
                onChange={this.props.onInputChange}/>
            </div>
        );
    }
}

export default Search;