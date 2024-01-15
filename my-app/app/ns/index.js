const express = require("express");
const nsRoutes = require("../routes/nsRoutes");

const app = express();

app.use("/ns", nsRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
