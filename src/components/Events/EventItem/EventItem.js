import React from 'react';
import { Link } from 'react-router-dom';
import Utility from '../../../hoc/Utility/Utility';

import classes from './EventItem.scss';

import starRating from '../../../assets/star-standard.svg';
import starRatingSelected from '../../../assets/star-filled.svg';

const EventItem  = (props) => {



    return (
        <Utility>
            <Link className={classes.EventLink} to={`/events/${props.id}`}>
                <div className={classes.EventItem} onClick={props.handleEventClick}>
                    <img className={classes.EventImage} src={props.image} alt={props.name} />
                    <img className={classes.EventFavoutie} src={starRatingSelected} alt="Your favourite" />
                    <h3 className={classes.EventTitle}>{props.title}</h3>
                 </div>
            </Link>
        </Utility>
    )
}

export default EventItem;