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

## React Components

### Dashboard.jsx
Main dashboard orchestrating all agent visualizations. Fetches data from all three agents in parallel.

### RouteVisualization.jsx
Displays optimized delivery routes with distance, time, and waypoints.

### RiskAlerts.jsx
Shows risk levels (low/moderate/high) with weather and geopolitical factors.

### InventoryStatus.jsx
Displays stock levels and stock-out predictions with recommendations.

## API Service (services/api.js)
Centralizes backend communication using axios. Uses REACT_APP_API_URL environment variable.

## Styling
- App.css: Header and layout
- Dashboard.css: Component grid, cards, risk/stock indicators

## Testing Components

### Start both servers:
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm start
```

### Access dashboard:
```
http://localhost:3000
```

## API Syntax Fix - 2025-11-10

### Issue Fixed
- **File**: `frontend/src/services/api.js`
- **Problem**: Incorrect axios syntax with misplaced backticks
- **Error Pattern**: `axios.post\`${API_URL}/api/v1/routes/optimize\`, {`
- **Fixed Pattern**: `axios.post(\`${API_URL}/api/v1/routes/optimize\`, {`

### Fix Applied
```bash
sed -i 's/axios\.post`/axios.post(`/g; s/axios\.get`/axios.get(`/g; s/optimize`,/optimize`,/g; s/assess`,/assess`,/g; s/status`,/status`,/g' frontend/src/services/api.js
```

### Verification
```bash
cat frontend/src/services/api.js
```

### Result
All three API methods now use correct syntax:
- `axios.post()` for routes/optimize
- `axios.get()` for risks/assess  
- `axios.get()` for inventory/status

### Status
✅ API syntax errors resolved - frontend can now make valid axios calls

## Frontend-Backend Connection Issue - 2025-11-10

### Problem Diagnosis
- **Issue**: Frontend shows blank data - no API connection
- **Root Cause**: Backend not deployed to Railway
- **Current State**: 
  - Frontend deployed at: https://supply-chain-optimizati-platform.thanhphongle.net
  - Backend: NOT DEPLOYED (both URLs return HTML)
  - Frontend .env: Points to localhost:3000 (invalid for production)

### Test Results
```bash
# Both URLs return frontend HTML, not API responses:
curl https://supply-chain-optimizati-platform-production.up.railway.app/health
# Returns: HTML (frontend)
curl https://supply-chain-optimizati-platform.thanhphongle.net/api/v1/routes/optimize
# Returns: HTML (frontend)
```

### Solution Required
1. Deploy backend as separate Railway service
2. Update frontend .env with backend URL
3. Redeploy frontend
