import React from 'react';

import classes from './Events.scss';
import EventItem from './EventItem/EventItem';

const Events = ( props ) => {
    
    return (
        <div className={classes.Events}>

        {props.events.map(event => (
            <span key={event.id}>
                <EventItem
                    id={event.id}
                    handleEventClick={props.handleEventClick}
                    title={event.name}
                    onInputChange={props.onInputChange}
                    image={event.images[8].url}
                    status={event.dates.status.code}
                    location={event._embedded.venues[0].name} />
            </span>
        ))}

        </div>
    );
}

export default Events;