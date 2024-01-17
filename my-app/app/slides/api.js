import axios from "axios";

// export async function GetAllData() {
//   try {
//     const info = await axios.get(
//       "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/disruptions?isActive=false?uicCode=8400294 ",
//       {
//         headers: {
//           "Ocp-Apim-Subscription-Key": "1c9d48c9e6b04553bc27c0bdf7e5c903",
//         },
//       }
//     );
//     const fetchedInfo = info;
//     return fetchedInfo;
//   } catch (err) {
//     throw err;
//     console.error(err);
//   }
// }

export async function GetNSDepartures() {
  try {
    const res = await axios.get(
      "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?uicCode=8400294",
      {
        // Pass a header for authentication
        headers: {
          "Ocp-Apim-Subscription-Key": "1c9d48c9e6b04553bc27c0bdf7e5c903",
        },
      }
    );

    const fetchedDepartures = res.data;
    return res;
  } catch (err) {
    throw err;
    console.error("No data fetched", err);
  }
}

export async function GetNSArrival() {
  try {
    const resArrive = await axios.get(
      "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/arrivals?station=ut&uicCode=%208400621",
      {
        // Pass a header for authentication
        headers: {
          "Ocp-Apim-Subscription-Key": "1c9d48c9e6b04553bc27c0bdf7e5c903",
        },
      }
    );

    const fetchedArrive = resArrive.data;

    return resArrive;
  } catch (err) {
    throw err;
    console.error("No data fetched", err);
  }
}
