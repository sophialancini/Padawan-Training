import React from 'react';
import "./style.css";

import Card from '../Card';
import flagBrazil from '../../img/flags/brasil.jpg';
import flagPak from '../../img/flags/paquistao.jpg';
import flagUS from '../../img/flags/eua.png';
import flagUK from '../../img/flags/uk.jpg';
import sun from '../../img/icons/sun.png';
import night from '../../img/icons/moon.png';
import rain from '../../img/icons/rain.png';


class Content extends React.Component {
    cards = [
        {
            date: 'Sep 15, 2016',
            time: '10:50',
            passengers: 1,
            originCity: 'S PAULO',
            originCountry: 'BRA',
            originFlag: flagBrazil,
            originWeatherIcon: sun,
            originTemp: '28.8 C',
            originETD: '15:05',
            destinyCity: 'ISLBMAD',
            destinyCountry: 'PAK',
            destinyFlag: flagPak,
            destinyWeatherIcon: night,
            destinyTemp: '17.8 C',
            destinyETA: '17:30',
            price: 'BRL 200,000',
        },
        {
            date: 'Sep 28, 2016',
            time: '3:15',
            passengers: 2,
            originCity: 'CLFRNA',
            originCountry: 'EUA',
            originFlag: flagUS,
            originWeatherIcon: rain,
            originTemp: '28.8 C',
            originETD: '22:40',
            destinyCity: 'LNDN',
            destinyCountry: 'UK',
            destinyFlag: flagUK,
            destinyWeatherIcon: night,
            destinyTemp: '17.8 C',
            destinyETA: '16:10',
            price: 'BRL 300,000',
        },
    ];

    render() {
        console.log(this.cards);
        return(
            <div className="wrapper">
                <h2>My Quotes</h2>
                {this.cards.map(card => (<Card cardData={card} />))}
            </div>
        );
    }
};

export default Content;