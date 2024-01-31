"use client";
import React, { useEffect, useState } from "react";
import { GetAllData, GetNSDepartures, GetNSArrival } from "./api";
import "./ns-style.css";
import Image from "next/image";
import logo from "../../images/SignMedia.png";


const Ns = ({ classState }) => {
  const [departureData, setDepartureData] = useState([]);
  const [arrivalData, setArrivalData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        // make both API endpoints available
        const [departureResponse, arrivalResponse] = await Promise.all([
          GetNSDepartures(),
          GetNSArrival(),
        ]);
        // get data from endpoints
        const departureData = departureResponse.data.payload.departures;
        const arrivalData = arrivalResponse.data.payload.departures;
        // set state
        setDepartureData(departureData);
        setArrivalData(arrivalData);

        console.log("This is your arrivaldata : ", arrivalData);
          console.log("This is your arrivaldata : ", departureData);
      } catch (err) {
        console.error(err);
      }
    };
      loadData();
      const intervalId = setInterval(async () => {
          await loadData();
          console.log("kanker")
      }, 60000);

      // Clean up the interval when the component is unmounted or when needed
      return () => clearInterval(intervalId);
  }, []);
  return (
      <div className="ns-page">
        <div className="sign-logo-container">
          <Image className="logo" src={logo} />
        </div>
        <div className="trein">
          <h1>De treinen</h1>
        </div>
        <div className={classState}>
          {departureData.length > 0 ? (
              departureData.map((item, index) => {
                const plannedDateTime = new Date(item.plannedDateTime);

                const actualDateTime = new Date(item.actualDateTime);

                const plannedhours = plannedDateTime.getHours().toString().padStart(2, '0');
                const plannedminutes = plannedDateTime.getMinutes().toString().padStart(2, '0');

                const actualhours = actualDateTime.getHours().toString().padStart(2, '0');
                const actualminutes = actualDateTime.getMinutes().toString().padStart(2, '0');

                const direction = item.direction === "Utrecht Centraal" ? "Utrecht" : item.direction;

                const timeDifference = actualminutes - plannedminutes;

                return (
                    <div key={index} className="lijst">
                        <p className="direction">Trein naar {direction}</p>
                        <p className="departures">
                            Vertrektijd {plannedhours}:{plannedminutes}
                            {timeDifference > 0 && ` +${timeDifference}`}
                        </p>
                    </div>
                );
              })
          ) : (
              <p>No data available</p>
          )}
        </div>
      </div>
  );

};

export default Ns;
