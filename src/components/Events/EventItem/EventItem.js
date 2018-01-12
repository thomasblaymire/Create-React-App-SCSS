import React from 'react';

import classes from './EventItem.scss';

const eventItem  = (props) => {
    return (
        <div className={classes.EventItem}>
            <h3>{this.props.event.title}</h3>
            <p>{this.props.event.description}</p>
            <img src={this.props.event.image} alt={this.props.event.title} />>
        </div>
    )
}

export default eventItem;