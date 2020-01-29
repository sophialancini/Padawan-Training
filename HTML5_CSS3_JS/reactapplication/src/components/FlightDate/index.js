import React from 'react';
import './style.css';

import calendaricon from "../../img/icons/ic_date_range_black_24px.svg";
import clockicon from "../../img/icons/ic_query_builder_black_24px.svg";
import passengericon from "../../img/icons/ic_people_black_24px.svg";

class FlightDate extends React.Component {
    render() {
        const { date, hour, passengers } = this.props;

        return(
            <>
                <div className="row">
                    <img src={calendaricon} alt="calendar icon"></img>
                    <p className="date">{date}</p>
                </div>
                <div className="row">
                    <img src={clockicon} alt="clock icon"></img>
                    <p className="date">{hour}</p>
                </div>
                <div className="row">
                    <img src={passengericon} alt="passenger icon"></img>
                    <p className="date">Passengers: {passengers}</p>
                </div>
            </>
        );
    }
};

export default FlightDate;