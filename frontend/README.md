# ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/frontend/README.md

# Supply Chain Frontend - React Application

## Overview
Interactive visualization and management interface for multi-agent supply chain system

## Directory Structure
```
frontend/
├── public/             # Static assets
├── src/
│   ├── App.js          # Main app component
│   ├── components/     # Reusable UI components
│   │   ├── Dashboard.jsx
│   │   ├── RouteVisualization.jsx
│   │   ├── RiskAlerts.jsx
│   │   └── InventoryStatus.jsx
│   ├── services/       # API communication
│   │   └── api.js
│   ├── utils/          # Helper functions
│   └── styles/         # CSS modules
└── package.json
```

## Setup
```bash
npm install
npm start
```

## Features

### 1. Interactive Supply Chain Dashboard
Real-time visualization of delivery routes and status

### 2. Exception Management Interface
Handle alerts and manual interventions

### 3. Agent Communication Display
Monitor multi-agent collaboration and decisions

### 4. Risk Assessment Alerts
Weather, geopolitical events, customs issues

## Environment Variables
Create `.env` file (never commit):
```
REACT_APP_API_URL=${REACT_APP_API_URL}
REACT_APP_GOOGLE_MAPS_KEY=${REACT_APP_GOOGLE_MAPS_KEY}
```

## Development
All configuration via environment variables
