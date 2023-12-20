export default async function GET(req) {

    return JSON.parse(req);

    const { name, message } = req.body

    try {++
        const query = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.345252990722656&longitude=5.613465785980225&current=temperature_2m,rain,snowfall&hourly=temperature_2m,rain,snowfall,cloud_cover,wind_speed_10m&timezone=Europe%2FBerlin");
        const response = await query.json();
        console.log('response from api', response);
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' })
    }
}
