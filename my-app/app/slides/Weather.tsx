"use client";
import React from 'react';
import './weatherStylesheet.css';
import Image from 'next/image';
import logo from '../../images/SignMedia.png'

const Weather = () => {
    return (
        <>
            <div className='signlogocontainer'>
                <Image className='signlogo' src={logo} alt={"nee"}></Image>
            </div>
            <div>
                <iframe className="weather-map"
                        src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=52.34167&lng=5.62083&overname=2&zoom=13&naam=harderwijk&size=3&voor=1"></iframe>
                <iframe scrolling="no" src="//gadgets.buienradar.nl/gadget/forecastandstation/6269/"></iframe>
            </div>
        </>
    );
}

export default Weather;