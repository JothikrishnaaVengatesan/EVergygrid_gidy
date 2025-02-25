## Problem Theme:
### Driving A Trillion Dollar Economy!

## Problem Statement Title :
### EVergy Grid

## Problem Statement:
Electric scooters (EV scooties) rely heavily on grid charging, leading to increased dependency 
on external power sources, longer charging times, and potential range anxiety. 

Traditional battery systems require frequent plug-in charging, limiting their efficiency, 
especially in areas with limited charging infrastructure.                         

The growing demand for sustainable transportation requires an innovative solution 
that integrates renewable energy sources into electric vehicles.

Current EVs rely heavily on external charging infrastructure, increasing 
dependency on the grid.

## Objective:
```
The primary objective of this system is to integrate solar and wind energy harvesting into an electric scooty, enabling it to charge itself while in motion or when parked. This concept reduces dependency on external charging, enhances energy efficiency, and makes the vehicle more sustainable and eco-friendly.

Key Goals
✅ Develop a microgrid system within the scooty to store and utilize 
solar energy.
✅ Reduce the strain on the main battery and improve its lifespan.
✅ Increase the energy efficiency of the scooty by using solar & 
wind energy for various functions.
✅ Reduce reliance on charging stations, making EVs more
 practical for long-distance travel.
✅ Introduce smart energy management for optimal power 
distribution.
```


## STEPS:
```
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
```
### 1. Firmware Code (`firmware/main.ino`)
This folder contains the microcontroller code written for the **ESP32** (or other compatible platforms like Arduino). The firmware handles the reading of solar, wind, and battery voltages, and integrates with the **MPPT** and **BMS** logic to optimize the system's energy consumption.

### 2. Web Dashboard Code (software/server.js)
This folder contains the backend for a real-time IoT dashboard built using Node.js and Express. The dashboard provides a live status of the system's battery, solar input, and wind input.

### 3. MPPT Algorithm (algorithms/mppt.py)
The MPPT algorithm optimizes the solar and wind inputs to maximize power generation. This Python script provides the logic used to determine the optimal power between solar and wind inputs.

## Features
- Self-charging via **solar panels & wind turbines**
- Uses **MPPT, BMS, EMS** for energy management
- **Real-time monitoring** via IoT dashboard
- **Fast-charging** with QuantumScape battery

## Installation
1. Upload firmware code to ESP32.
2. Run `software/server.js` for monitoring dashboard.
3. Deploy MPPT and BMS logic.


