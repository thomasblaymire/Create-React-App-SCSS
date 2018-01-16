import React, {Component} from 'react';
import classes from './Search.scss';

class Search extends Component {

    render() {
        return (
            <div className={classes.Search}>
             <input 
                placeholder="Search for an event, artist or show.."
                value={this.props.inputValue} 
                onChange={this.props.onInputChange}/>
            </div>
        );
    }
}

export default Search;