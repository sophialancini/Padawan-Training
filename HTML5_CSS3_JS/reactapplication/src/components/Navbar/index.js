import React from 'react';
import './style.css';

import home from "../../img/icons/ic_home_black_24px.svg";

class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <img src={home} alt="home"></img>
                <p className="navbartxt">My quotes</p>
            </nav>
        );
    }
};

export default Navbar;