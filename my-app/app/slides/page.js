"use client";
import React from 'react'
import Ns from './Ns'
import Weather from './Weather'
import Welcome from './Welcome'


export default function Home () {
    return (
        <>
            <Ns />
            <Weather />
            <Welcome />
        </>
    );
}