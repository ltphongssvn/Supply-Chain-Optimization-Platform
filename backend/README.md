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

## Express Server Setup

### File: server.js
Main Express application with API endpoints for multi-agent system.

### Endpoints

#### Health Check
```bash
curl http://localhost:3000/health
```
Returns server health status and timestamp.

#### API Info
```bash
curl http://localhost:3000/api/v1
```
Lists all available endpoints.

#### Route Optimization
```bash
curl -X POST http://localhost:3000/api/v1/routes/optimize \
  -H "Content-Type: application/json" \
  -d '{"destinations": ["A", "B", "C"]}'
```

#### Risk Assessment
```bash
curl http://localhost:3000/api/v1/risks/assess
```

#### Inventory Status
```bash
curl http://localhost:3000/api/v1/inventory/status
```

#### Agent Coordination
```bash
curl -X POST http://localhost:3000/api/v1/agents/coordinate \
  -H "Content-Type: application/json" \
  -d '{"task": "optimize_delivery"}'
```

### Running the Server

#### Install dependencies
```bash
cd backend
npm install
```

#### Create .env file
```bash
cp .env.example .env
# Edit .env with actual values
```

#### Start development server
```bash
npm run dev
```

#### Start production server
```bash
npm start
```

### Troubleshooting

**Port already in use**
```bash
# Find process using port 3000
lsof -i :3000
# Kill the process
kill -9 <PID>
```

**Missing dependencies**
```bash
npm install
```

**Environment variables not loaded**
- Verify .env file exists in backend/
- Check .env values are set correctly
- Restart server after .env changes

## Express Server Setup

### File: server.js
Main Express application with API endpoints for multi-agent system.

### Endpoints

#### Health Check
```bash
curl http://localhost:3000/health
```
Returns server health status and timestamp.

#### API Info
```bash
curl http://localhost:3000/api/v1
```
Lists all available endpoints.

#### Route Optimization
```bash
curl -X POST http://localhost:3000/api/v1/routes/optimize \
  -H "Content-Type: application/json" \
  -d '{"destinations": ["A", "B", "C"]}'
```

#### Risk Assessment
```bash
curl http://localhost:3000/api/v1/risks/assess
```

#### Inventory Status
```bash
curl http://localhost:3000/api/v1/inventory/status
```

#### Agent Coordination
```bash
curl -X POST http://localhost:3000/api/v1/agents/coordinate \
  -H "Content-Type: application/json" \
  -d '{"task": "optimize_delivery"}'
```

### Running the Server

#### Install dependencies
```bash
cd backend
npm install
```

#### Create .env file
```bash
cp .env.example .env
# Edit .env with actual values
```

#### Start development server
```bash
npm run dev
```

#### Start production server
```bash
npm start
```

### Troubleshooting

**Port already in use**
```bash
# Find process using port 3000
lsof -i :3000
# Kill the process
kill -9 <PID>
```

**Missing dependencies**
```bash
npm install
```

**Environment variables not loaded**
- Verify .env file exists in backend/
- Check .env values are set correctly
- Restart server after .env changes

## Routes Structure

### File Organization
```
backend/routes/
├── index.js        # Main router mounting all routes
├── routes.js       # Route optimization endpoints
├── risks.js        # Risk assessment endpoints
├── inventory.js    # Inventory status endpoints
└── agents.js       # Agent coordination endpoints
```

### Testing Routes

#### Test route optimization
```bash
curl -X POST http://localhost:3000/api/v1/routes/optimize \
  -H "Content-Type: application/json" \
  -d '{"destinations": ["NYC", "LA"], "constraints": {"maxTime": 48}}'
```

#### Test risk assessment
```bash
curl http://localhost:3000/api/v1/risks/assess
```

#### Test inventory status
```bash
curl http://localhost:3000/api/v1/inventory/status
```

#### Test agent coordination
```bash
curl -X POST http://localhost:3000/api/v1/agents/coordinate \
  -H "Content-Type: application/json" \
  -d '{"task": "optimize_supply_chain", "params": {}}'
```

### Configuration (config/index.js)
Centralized environment variable management:
- Server port and environment
- External API keys
- Agent timeouts and retries
- CORS settings
