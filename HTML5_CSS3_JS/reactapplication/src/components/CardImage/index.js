import React from 'react';
import './style.css';

import background from "../../img/icons/mountain-background.jpg";
import airplane from "../../img/icons/GLEX-cutout.png";

class CardImage extends React.Component {
    render() {
        return(
            <div className="card-img">
                <img className="background-img" src={background} alt="background"></img>
                <img className="airplane-img" src={airplane} alt="airplane"></img>
            </div>
        );
    }
};

export default CardImage;