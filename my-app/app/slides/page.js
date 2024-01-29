"use client";
import React, { useEffect, useState } from "react";
import Ns from "./Ns";
import Weather from "./Weather";
import Welcome from "./Welcome";
import './pageStylesheet.css';

export default function Home() {
  // create a component array each item within is an object
  const components = [
    { component: <Ns />, classState: "active" },
    { component: <Weather />, classState: "none" },
    { component: <Welcome />, classState: "none" },
  ];
  // make an currentIndex state that determines which component the show
  const [currentIndex, setCurrentIndex] = useState(0);
  // make a useEffect in which a setInterval which updates the currentIndex every 10 secs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // at last render the component array via map
  return (
    <div className="page">
      {components.length > 0 ? (
        components.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "active" : "none"}
          >
            {item.component}
          </div>
        ))
      ) : (
        <p>no component fetched</p>
      )}
    </div>
  );
}
