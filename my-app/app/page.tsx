"use client";
import React from 'react';
import { motion } from "framer-motion"
import './stylesheet.css';

export default function Home() {
<<<<<<< Updated upstream
  return <>home</>;
=======

    return (
        <>
            <div className="bigcontainer">
                <div className="weather-container1">
                    <iframe className="weather-map" src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=52.34167&lng=5.62083&overname=2&zoom=13&naam=harderwijk&size=3&voor=1"></iframe>
                </div>
                <div className="weather-container2">
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition:{
                                delay: .4
                            }
                        },
                    }}>
                        <h1 className="title">Het weer van de week!</h1>
                    </motion.div>
                    <motion.iframe whileHover={{
                        scale:1.2,
                        transition: {
                            duration: .2,
                        }
                    }} className="weather-forecast" scrolling="no" src="//gadgets.buienradar.nl/gadget/forecastandstation/6269/"></motion.iframe>
                </div>
            </div>
        </>

    );
>>>>>>> Stashed changes
}

