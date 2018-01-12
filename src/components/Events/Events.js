import React from 'react';

import classes from './Events.scss';
import EventItem from './EventItem/EventItem';

const Events = ( props ) => {

    console.log(props.events);

    return (
        <div className={classes.Events}>

        {props.events.map(event => (

            <EventItem
                title={event.name}
                image={event.images[8].url}
                status={event.dates.status.code}
                location={event._embedded.venues[0].name} />
        ))}

        </div>
    );
}

export default Events;