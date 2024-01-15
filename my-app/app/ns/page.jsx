"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
function index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:4000/ns");
        const fetchedData = response.data.payload.departures;
        // make fetched time mapped because its an array
        const fetchedTime = fetchedData.map((item) => item.plannedDateTime);
        console.log(fetchedData);
        setData(fetchedData);
      } catch (err) {
        console.error("No data fetched", err);
      }
    }
    getData();
  }, []); //unmount the useEffect after the GET request was succesfull
  return (
    <div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            {item.name}
            {item.direction}
            {item.plannedDateTime}
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default index;
