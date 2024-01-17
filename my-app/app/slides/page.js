"use client";
import React, { useEffect, useState } from "react";
import Ns from "./Ns";
import Weather from "./Weather";
import Welcome from "./Welcome";

export default function Home() {
  const [tresh, setTresh] = useState(0);
  const time = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      setTresh((prevTresh) => (prevTresh === 0 ? 1 : 0));
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {tresh === 0 && <Ns />}
      {tresh === 1 && <Weather />}
    </>
  );
}
    