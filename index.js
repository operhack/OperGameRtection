const express = require("express");
const app = express();

app.get("/roblox/customer312fd", (req, res) => {
  res.json({ script1: "Hi roblox!" },
          { script2: "Script 5" });
});

app.get("/roblox/customer348fd", (req, res) => {
  res.json({ script1: "Script Number 5" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
