import React from 'react';

import classes from './Events.scss';
import EventItem from './EventItem/EventItem';

const Events = ( props ) => {
    
    return (
        <div className={classes.Events}>

        {props.events.map(event => (
            <div key={event.id} className={classes.EventsItem}>
                <EventItem
                    title={event.name}
                    onInputChange={props.onInputChange}
                    image={event.images[8].url}
                    status={event.dates.status.code}
                    location={event._embedded.venues[0].name} />
            </div>
        ))}

        </div>
    );
}

export default Events;