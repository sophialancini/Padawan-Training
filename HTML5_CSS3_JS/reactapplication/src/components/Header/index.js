import React from 'react';
import './style.css';

import vistajetLogo from '../../img/icons/vistajet-logo.svg';

class Header extends React.Component {
    render() {
        return(
            <header>
                <img src={vistajetLogo} alt="vistajet-logo"></img>
            </header>
        );
    }
};

export default Header;