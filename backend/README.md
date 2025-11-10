# ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/README.md

# Supply Chain Backend - Multi-Agent System

## Architecture
Node.js backend implementing Level 3-4 Agentic System

## Directory Structure
```
backend/
├── server.js           # Express server entry point
├── agents/             # AI Agent implementations
│   ├── coordinator.js  # Main coordinator agent
│   ├── route-optimizer.js
│   ├── risk-assessment.js
│   └── inventory.js
├── routes/             # API endpoints
├── controllers/        # Request handlers
├── services/           # Business logic
├── utils/              # Utilities
└── config/             # Configuration
```

## Setup
```bash
npm install
npm run dev
```

## Environment Variables
Create `.env` file (never commit):
```
PORT=${PORT:-3000}
NODE_ENV=${NODE_ENV:-development}
GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}
WEATHER_API_KEY=${WEATHER_API_KEY}
```

## Agents

### 1. Route Optimizer Agent
Creates optimal delivery plans using Google Maps API

### 2. Risk Assessment Agent
Monitors weather, geopolitical events

### 3. Inventory Agent
Predicts stock-outs using historical data

### 4. Coordinator Agent
Orchestrates multi-agent collaboration via MCP protocol
