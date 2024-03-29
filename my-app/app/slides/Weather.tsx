"use client";
import React, {useEffect, useState} from 'react';
import './weatherStylesheet.css';
import Image from 'next/image';
import logo from '../../images/SignMedia.png'

const Weather = () => {

    const d = new Date();
    const currentHour = d.getHours();

    const [temp, setTemp] = useState([])
    useEffect(() => {
        const loadData = async () => {
            try {
                const getData = async () =>{
                    const query = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.33930511450778&longitude=5.61927080154419&hourly=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1\n');
                    const response = await query.json();
                    console.log(response)
                    setTemp(response)
                }
                getData();
            } catch (err) {
                console.error(err);
            }
        };
        loadData();
        const intervalId = setInterval(async () => {
            await loadData();
        }, 60000);

        // Clean up the interval when the component is unmounted or when needed
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="page">
            <div className='signlogocontainer'>
                <Image className='signlogo' src={logo} alt={"nee"}></Image>
            </div>
            <div className="title-around">
                <h1 className="title">Het Weerbericht</h1>
               </div>
            <div className="middle">
                <iframe scrolling="no" className="weather-map" src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=52.34167&lng=5.62083&overname=2&zoom=6&naam=harderwijk&size=2b&voor=1"></iframe>
                <div className="text-around">
                    {temp.hourly && temp.hourly.temperature_2m[currentHour] < 0 && (
                        <p className="text">Opgelet! Het word vandaag {temp.hourly.temperature_2m[currentHour]} graden.</p>
                    )}
                    {temp.hourly && temp.hourly.temperature_2m[currentHour] > 0 && temp.hourly.temperature_2m[currentHour] < 5 && (
                        <p className="text">Het is nu {temp.hourly.temperature_2m[currentHour]} graden.</p>
                    )}
                    {temp.hourly && temp.hourly.temperature_2m[currentHour] > 5 && temp.hourly.temperature_2m[currentHour] < 10 && (
                        <p className="text">Het is nu {temp.hourly.temperature_2m[currentHour]} graden.</p>
                    )}
                    {temp.hourly && temp.hourly.temperature_2m[currentHour] > 10 && temp.hourly.temperature_2m[currentHour] < 15 && (
                        <p className="text">Het is nu {temp.hourly.temperature_2m[currentHour]} graden.</p>
                    )}
                    {temp.hourly && temp.hourly.temperature_2m[currentHour] > 15 && temp.hourly.temperature_2m[currentHour] < 20 && (
                        <p className="text">Het is nu {temp.hourly.temperature_2m[currentHour]} graden.</p>
                    )}
                    {temp.hourly && temp.hourly.temperature_2m[currentHour] > 20 && temp.hourly.temperature_2m[currentHour] < 25 && (
                        <p className="text">Het is nu {temp.hourly.temperature_2m[currentHour]} graden.</p>
                    )}
                    {temp.hourly && temp.hourly.temperature_2m[currentHour] > 25 && (
                        <p className="text">Het is nu {temp.hourly.temperature_2m[currentHour]} graden.</p>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Weather;