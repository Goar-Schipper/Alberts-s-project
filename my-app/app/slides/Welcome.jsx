"use client";
import React from 'react'
import Foto from '../../images/Fotovanalbert.png'
import Image from 'next/image';

import './imageStylesheet.css'


const Welcome = () => {
    return (
        <>
            <Image className="Foto" src={Foto} alt={"hallo"}/>
        </>
    );
}

export default Welcome;