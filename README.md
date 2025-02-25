# EVergygrid_gidy

## STEPS:
Step 1: Install VS Code & Setup Git
Download & Install VS Code – Download Here
Install Git – Download Here
Set up Git:
sh
Copy
Edit
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
Step 2: Clone GitHub Repository (or Create One)
Open GitHub and create a new repository.
Copy the repository HTTPS link.
Open VS Code and open a new Terminal (Ctrl + `).
Clone the repo using:
sh
Copy
Edit
git clone https://github.com/your-username/your-repo.git
Navigate into the project folder:
sh
Copy
Edit
cd your-repo
Step 3: Set Up the Project
Install Dependencies (if applicable)
For Python (Backend - Flask)
sh
Copy
Edit
pip install -r requirements.txt
For JavaScript (Frontend - React)
sh
Copy
Edit
cd frontend
npm install
Open VS Code and modify/add your code inside the respective directories.
Step 4: Test Your Code Locally
For Backend (Flask API)
sh
Copy
Edit
python app.py
For Frontend (React)
sh
Copy
Edit
cd frontend
npm start
For ESP32 (Firmware)
Install PlatformIO extension in VS Code.
Upload the code to your ESP32.
Step 5: Push Code to GitHub
Check status:
sh
Copy
Edit
git status
Add changes:
sh
Copy
Edit
git add .
Commit changes:
sh
Copy
Edit
git commit -m "Added initial project setup"
Push to GitHub:
sh
Copy
Edit
git push origin main
Step 6: Update Your Code Regularly
Pull latest changes before working:
sh
Copy
Edit
git pull origin main
Repeat Steps 4 & 5 when making updates.

## Folder Structure

/microgrid-ev-scooty/
│── firmware/          # Microcontroller code (ESP32, Arduino, etc.)
│── software/          # Web dashboard & monitoring system
│── algorithms/        # MPPT, BMS, EMS control logic
│── hardware/          # Circuit schematics & PCB designs
│── documentation/     # Project overview, architecture & references
│── README.md          # Project details & setup instructions


## 1. Firmware Code (ESP32/Arduino) - firmware/main.ino
~~~cpp
#include <Wire.h>
#include <WiFi.h>
#include "MPPTController.h" // Custom MPPT algorithm
#include "BMSController.h"  // Battery Management System

#define SOLAR_PIN 34
#define WIND_PIN 35
#define BATTERY_PIN 36

float solarVoltage, windVoltage, batteryLevel;

void setup() {
    Serial.begin(115200);
    MPPT_init();
    BMS_init();
}

void loop() {
    solarVoltage = analogRead(SOLAR_PIN) * (5.0 / 1023.0);
    windVoltage = analogRead(WIND_PIN) * (5.0 / 1023.0);
    batteryLevel = analogRead(BATTERY_PIN) * (5.0 / 1023.0);

    MPPT_optimize(solarVoltage, windVoltage);
    BMS_manage(batteryLevel);
    delay(1000);
}
~~~

## 2. Web Dashboard Code (Node.js + Express) - software/server.js
~~~javascript
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
~~~

## 3. MPPT Algorithm - algorithms/mppt.py
~~~python
def mppt_optimize(solar_voltage, wind_voltage):
    optimal_power = max(solar_voltage * 0.95, wind_voltage * 0.90)
    return optimal_power
~~~

## 4. README.md
md
# QuantumScape-Integrated Microgrid Scooty
This project integrates **QuantumScape solid-state batteries** with a solar-wind hybrid microgrid in an electric scooty.

## Features
- Self-charging via **solar panels & wind turbines**
- Uses **MPPT, BMS, EMS** for energy management
- **Real-time monitoring** via IoT dashboard
- **Fast-charging** with QuantumScape battery

## Installation
1. Upload firmware code to ESP32.
2. Run `software/server.js` for monitoring dashboard.
3. Deploy MPPT and BMS logic.


