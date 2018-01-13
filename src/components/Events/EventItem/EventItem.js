import React from 'react';

import classes from './EventItem.scss';

const EventItem  = (props) => {

    return (
        <div className={classes.EventItem}>
            <h3 className={classes.EventTitle}>{props.title}</h3>
            <p>{props.description}</p>
            <img className={classes.EventImage}src={props.image} alt={props.name} />
            <span className={classes.EventStatus}> Status: {props.status}</span>
            <i>{props.location}</i>
        </div>
    )
}

export default EventItem;