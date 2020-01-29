import React from 'react';
import './style.css';

// import originflag from "../../img/flags/brasil.jpg";
// import weathericon from "../../img/icons/sun.png";

class Origin extends React.Component {
    render() {
        const { city, country, flag, weathericon, temperature} = this.props;

        return(
            <div className="origin">
                <p className="city">{city}</p>
                <div className="row">
                    <img className="flag" src={flag} alt="origin flag"></img>
                    <p className="airport">{country}</p>
                </div>
                <div className="row">
                    <img className="weathericon" src={weathericon} alt="weather icon"></img>
                    <p className="temperature">{temperature}</p>
                </div>
            </div>
        );
    }
};

export default Origin;