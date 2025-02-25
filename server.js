javascript
const express = require("express");
const app = express();
const port = 3000;

let batteryStatus = 75;
let solarInput = 12.5;
let windInput = 8.3;

app.get("/status", (req, res) => {
    res.json({ battery: batteryStatus, solar: solarInput, wind: windInput });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

