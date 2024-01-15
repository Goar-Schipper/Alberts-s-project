// this file makes the API call
const axios = require("axios");

async function getDepartureData() {
  try {
    const res = await axios.get(
      "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=ut&uicCode=8400621",
      {
        // Pass a header for authentication
        headers: {
          "Ocp-Apim-Subscription-Key": "1c9d48c9e6b04553bc27c0bdf7e5c903",
        },
      }
    );
    return res.data;
  } catch (err) {
    throw err;
  }
}

module.exports = { getDepartureData };
