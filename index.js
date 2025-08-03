const express = require("express");
const app = express();

/////////////////////////////////////////////////////
const axios = require("axios");

const url = "https://opergamertection.onrender.com"; // βάλε το URL που θες

app.get("/roblox/customersPlaces", (req, res) => {
  res.json([{114248049331485: "Available" }]);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
