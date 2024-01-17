"use client";
import React, { useEffect, useState } from "react";
import { GetAllData, GetNSDepartures, GetNSArrival } from "../ns/api";

export default function index() {
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
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <div>
        {departureData.length > 0 ? (
          departureData.map((item, index) => (
            <div
              key={index}
              className="w-[100vw] flex justify-evenly items-center text-center p-9"
            >
              <p>treinnummer {item.name}</p>
              <p>gaat naar {item.direction}</p>
              <p>vertrek tijd {item.plannedDateTime}</p>
              <p className="flex justify-evenly w-[500px]">
                stops:{" "}
                {item.routeStations
                  .map((station) => station.mediumName)
                  .join(", ")}
              </p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
