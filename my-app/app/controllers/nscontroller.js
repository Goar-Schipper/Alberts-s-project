// this file handles the data received from the api
const apiService = require("../services/nsapi");

async function getDataForDeparture(req, res) {
  try {
    const data = await apiService.getDepartureData();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { getDataForDeparture };
