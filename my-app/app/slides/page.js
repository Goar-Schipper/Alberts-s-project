"use client";
import React, { useEffect, useState } from "react";
import Ns from "./Ns";
import Weather from "./Weather";
import Welcome from "./Welcome";
import { Img } from "./img";
import "./pageStylesheet.css";
import { getSlides } from "../admin/logic.";

export default function Home() {
  const [components, setComponents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesArr = await getSlides();
        
        // Only create Img components if there are images
        const imageComponents =
          imagesArr.length > 0
            ? imagesArr.map((image, index) => ({
                component: <Img key={index} image={image} />,
                classState: "none",
              }))
            : [];

        // Combine image components with static components
        const allComponents = [
          { component: <Ns />, classState: "none" },
          { component: <Weather />, classState: "none" },
          { component: <Welcome />, classState: "none" },
          ...imageComponents,
        ];

        setComponents(allComponents);
      } catch (err) {
        console.error("error fetching images", err.message);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [components.length]);

  const Meldingen = [
    "hallo",
    "goedemorgen",
    "peiter",
    "erisenduer",
    "tygo is gay",
  ];

  return (
    <>
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
          <p>no components fetched</p>
        )}
      </div>

      <div className="bar">
        <div className="bartext">
          {Meldingen.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
}
