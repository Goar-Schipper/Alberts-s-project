"use client";
import React, { useEffect, useState } from "react";
import Ns from "./Ns";
import Weather from "./Weather";
import Welcome from "./Welcome";
import { Img } from "./img";
import "./pageStylesheet.css";
import { getSlides } from "../admin/logic.";
import {getAllMessages} from "../admin/logic.";

export default function Home() {
  const [images, setImages] = useState([]);
  const [incomingMessage,setIncomingMessage] = useState([]);
  useEffect(() => {
    const fetchMessages = async function() {
      try {
        const messages = await getAllMessages();
        setIncomingMessage(messages)
      } catch (err) {
        console.error(err);
      }
    }
    fetchMessages();
  },[]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesArr = await getSlides();
        setImages(imagesArr);
      } catch (err) {
        console.error("error fetching images", err.message);
      }
    };
    fetchImages();
  }, []);

  const imageComponents =
    images.length > 0
      ? images.map((image, index) => ({
          component: <Img key={index} index={index} image={image} />,
          classState: index === 0 ? "active" : "none", // initially set to "active" for the first image
        }))
      : [];

  const staticComponents = [
    { component: <Ns />, classState: "none" },
    { component: <Weather />, classState: "none" },
    { component: <Welcome />, classState: "none" },
  ];

  const allComponents = [...staticComponents, ...imageComponents];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allComponents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allComponents.length]);

  return (
      <>
        <div className="page">
          {allComponents.length > 0 ? (
              allComponents.map((item, index) => (
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

        <div className="bar">
          <div className="bartext">
            {/* messages */}
            {incomingMessage.map((msg, index) => (
                <div key={index}>
                  <p>{msg.message}</p>
                </div>
            ))}
          </div>

        </div>
      </>
  );
}
