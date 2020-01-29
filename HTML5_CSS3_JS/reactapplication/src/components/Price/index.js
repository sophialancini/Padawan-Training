import React from 'react';
import './style.css';

import vistalogo from "../../img/icons/vistaLogo.png";

class Price extends React.Component {
    render() {
        const { price } = this.props;

        return(
            <div className="pricebox">
                <div className="top-bar">
                    <img className="logo" src={vistalogo} alt="vistalogo"></img>
                </div>
                
                <p className="pricetxt">{price}</p>
            </div>
        );
    }
};

export default Price;