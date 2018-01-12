import React from 'react';

import classes from './EventItem.scss';

const EventItem  = (props) => {

    console.log('props is' + props);

    return (
        <div className={classes.EventItem}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img class={classes.EventImage}src={props.image} alt={props.name} />
            <span class={classes.EventStatus}> Status: {props.status}</span>
            <i>{props.location}</i>
        </div>
    )
}

export default EventItem;