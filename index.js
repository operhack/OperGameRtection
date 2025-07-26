const express = require("express");
const app = express();

/////////////////////////////////////////////////////
const axios = require("axios");

const url = "https://opergamertection.onrender.com"; // βάλε το URL που θες

setInterval(async () => {
  try {
    const response = await axios.get(url);
    console.log("Pinged:", response.status);
  } catch (error) {
    console.error("Ping failed:", error.message);
  }
}, 5 * 60 * 1000); // κάθε 5 λεπτά
/////////////////////////////////////////////////////////////
app.get("/roblox/customer312fd", (req, res) => {
  res.json([{ script1: "Hi roblox!" },
          { script2: "Script 5" }]);
});

app.get("/roblox/customer348fd", (req, res) => {
  res.json([{ script1: "Script Number 5" }]);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
