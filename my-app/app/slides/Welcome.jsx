"use client";
import React from 'react'
import Foto from '../../images/Fotovanalbert.png'
import Image from 'next/image';

import './imageStylesheet.css'


const Welcome = () => {
    return (
        <div className="kiekeboe">
            <Image className="Foto" src={Foto} alt={"hallo"}/>
        </div>
    );
}

export default Welcome;