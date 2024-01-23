"use client";
import React from 'react';
import './weatherStylesheet.css';
import Image from 'next/image';
import logo from '../../images/SignMedia.png'

const Weather = () => {
    return (
        <div className="page">
            <div className='signlogocontainer'>
                <Image className='signlogo' src={logo} alt={"nee"}></Image>
            </div>
            <div className="title-around">
                <h1 className="title">Het Weerbericht</h1>
               </div>
            <div className="middle">
                <iframe scrolling="no" className="weather-map" src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=52.34167&lng=5.62083&overname=2&zoom=13&naam=harderwijk&size=2b&voor=1"></iframe>
                <div className="text-around">
                    <p className="text">ajsdaksjdbkdfnwpefjoiewgfoiweofggajsdaksjdbkdfnwpefjoiewgfoiweofggajsdaksjdbkdfnwpefjoiewgfoiweofggajsdaksjdbkdfnwpefjoiewgfoiweofggajsdaksjdbkdfnwpefjoiewgfoiweofggajsdaksjdbkdfnwpefjoiewgfoiweofggajsdaksjdbkdfnwpefjoiewgfoiweofggajsdaksjdbkdfnwpefjoiewgfoiweofggajsdaksjdbkdfnwpefjoiewgfoiweofggajsdaksjdbkdfnwpefjoiewgfoiweofgg</p>
                </div>
            </div>
            <div className="bottom">
                <div className="voordemakers-around">
                    <p className="voor">voor de</p>
                    <p className="creative">creative</p>
                    <p className="makers">makers</p>
                </div>
                <div className="bar-around">
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
}

export default Weather;