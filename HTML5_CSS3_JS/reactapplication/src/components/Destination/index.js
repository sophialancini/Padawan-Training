import React from 'react';
import './style.css';

// import destinyflag from "../../img/flags/paquistao.jpg";
// import weathericon from "../../img/icons/moon.png";

class Origin extends React.Component {
    render() {
        const { city, country, flag, weathericon, temperature} = this.props;

        return(
            <div className="destination">
                <p className="city">{city}</p>
                <div className="row">
                    <p className="airport">{country}</p>
                    <img className="flag" src={flag} alt="destiny flag"></img>
                </div>
                <div className="reverse-row">
                    <img className="weathericon" src={weathericon} alt="weather icon"></img>
                    <p className="temperature">{temperature}</p>
                </div>
            </div>
        );
    }
};

export default Origin;