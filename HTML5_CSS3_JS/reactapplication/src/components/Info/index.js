import React from 'react';
import './style.css';

import FlightDate from '../FlightDate';
import FlightInfo from '../FlightInfo';

class Info extends React.Component {    
    render() {
        const { cardData } = this.props;

        return(
            <div className="info">
                <div className="top-bar">
                    <FlightDate date={cardData.date} hour={cardData.date} passengers={cardData.passengers} />
                </div>
                <FlightInfo cardData={cardData} />
            </div>
        );
    }
};

export default Info;