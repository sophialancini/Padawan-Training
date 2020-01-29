import React from 'react';
import './style.css';

import CardImage from '../CardImage';
import Info from '../Info';
import Price from '../Price';


class Card extends React.Component {
    render() {
        const { cardData } = this.props;

        return(
            <div className="card">
                <CardImage />
                <Info cardData={cardData} />
                <Price price={cardData.price} />                      
            </div>
        );
    }
};

export default Card;