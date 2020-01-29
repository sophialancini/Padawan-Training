import React from 'react';
import './style.css';

import airplaneicon from '../../img/icons/airport-icon.png';

import Origin from "../Origin";
import Destination from "../Destination";

class FlightInfo extends React.Component {
    render() {
        const { cardData } = this.props;

        return(
            <>
                <div className="flight-info">
                    <Origin city={cardData.originCity} country={cardData.originCountry} 
                        flag={cardData.originFlag} weathericon={cardData.originWeatherIcon} 
                        temperature={cardData.originTemp} />
                    <img className="airplaneicon" src={airplaneicon} alt="airplane icon"></img> 
                    <Destination city={cardData.destinyCity} country={cardData.destinyCountry} 
                        flag={cardData.destinyFlag} weathericon={cardData.destinyWeatherIcon} 
                        temperature={cardData.destinyTemp} />
                </div>

                <div className="line"></div>

                <div className="flight-info">
                    <p className="time">ETD: {cardData.originETD} loc</p>
                    <p className="time">ETA: {cardData.destinyETA} loc</p>
                </div>
            </>
        );
    }
};

export default FlightInfo;