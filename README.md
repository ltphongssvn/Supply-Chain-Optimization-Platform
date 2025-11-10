# Supply Chain Optimization Platform

## Project Overview
A Level 3-4 Multi-Agent System for global logistics optimization using Node.js backend and React frontend.

## Architecture
Based on AI Agents and Architectures principles:
- **Level 3**: Collaborative Multi-Agent System
- **Level 4**: Self-Evolving capabilities

## Agents
1. Route Optimizer Agent - Creates delivery plans
2. Risk Assessment Agent - Monitors weather, geopolitical events
3. Inventory Agent - Predicts stock-outs
4. Self-evolving agents for emerging risks

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js
- **Communication**: MCP Protocol (Agent-to-Agent)
- **Deployment**: Google Cloud Run
- **Monitoring**: OpenTelemetry tracing
- **APIs**: Google Maps API, weather services, customs databases, ERP webhooks

## Git Workflow
Following GitFlow branching strategy:
- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - Feature branches
- `release/*` - Release preparation
- `hotfix/*` - Production fixes

## Setup Instructions
(To be documented as project develops)

## Project initialized
- Date: 2025-11-09
- Git repository initialized
- GitFlow structure established

## Git Workflow - Squash Merge Strategy

### Branch Workflow
1. Create feature branch from `develop`
2. Make changes and commit
3. Push feature branch to remote
4. Create Pull Request
5. **Squash merge** to consolidate commits
6. **Delete remote branch** automatically
7. Prune stale local references

### Merge Command
```bash
gh pr merge --squash --delete-branch
```

### Benefits
- **Traceability**: One commit per feature
- **Revertibility**: Rollback entire feature atomically
- **Clean History**: No "WIP" or "fix typo" commits
- **Repository Hygiene**: No stale branches

### After Merge Cleanup
```bash
git fetch --prune && git branch -d feature/branch-name && git status
```

## Implementation Complete

### Architecture Overview
**Level 3-4 Multi-Agent System** following AI Agents and Architectures principles:
- BaseAgent with 5-step problem-solving cycle
- RouteOptimizerAgent, RiskAssessmentAgent, InventoryAgent
- CoordinatorAgent orchestrating multi-agent workflows
- React Dashboard with real-time visualization
- Express backend with modular routing

### Installation

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with actual API keys
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
# Set REACT_APP_API_URL=http://localhost:3000
npm start
```

### Testing

#### Test Individual Agents
```bash
# Route Optimization
curl -X POST http://localhost:3000/api/v1/routes/optimize \
  -H "Content-Type: application/json" \
  -d '{"destinations": ["NYC", "LA"], "constraints": {"maxTime": 48}}'

# Risk Assessment
curl "http://localhost:3000/api/v1/risks/assess?regions=US,EU"

# Inventory Status
curl "http://localhost:3000/api/v1/inventory/status?items=item1,item2&timeframe=30"
```

#### Test Agent Coordination
```bash
curl -X POST http://localhost:3000/api/v1/agents/coordinate \
  -H "Content-Type: application/json" \
  -d '{
    "task": "optimize_supply_chain",
    "params": {
      "destinations": ["NYC", "LA"],
      "regions": ["US"],
      "items": ["item1", "item2"]
    }
  }'
```

### Access Dashboard
```
http://localhost:3000
```

### Troubleshooting

**Backend not starting:**
```bash
# Check port 3000
lsof -i :3000
# Kill process if needed
kill -9 <PID>
```

**Environment variables not loaded:**
- Verify .env files exist in backend/ and frontend/
- Restart servers after .env changes

**Frontend API errors:**
- Verify REACT_APP_API_URL in frontend/.env
- Check backend is running on specified port
- Verify CORS settings in backend/config/index.js

**Dependencies missing:**
```bash
cd backend && npm install
cd frontend && npm install
```

### Project Structure
```
Supply-Chain-Optimization-Platform/
├── backend/
│   ├── agents/           # AI agents (Base, Route, Risk, Inventory, Coordinator)
│   ├── routes/           # API endpoints
│   ├── config/           # Environment configuration
│   └── server.js         # Express server
├── frontend/
│   ├── src/
│   │   ├── components/   # React components (Dashboard, visualizations)
│   │   ├── services/     # API communication
│   │   └── styles/       # CSS styling
│   └── public/           # Static assets
└── docs/
    └── ARCHITECTURE.md   # Detailed system architecture
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes, stage, commit
git add file1 file2
git commit -m "feat: description"
git push -u origin feature/your-feature

# Create PR, squash merge, prune
git branch -a
gh pr create --base develop --title "feat: description" --body "details"
gh pr merge <PR#> --squash --delete-branch
git branch -a
git fetch --prune
git branch -a
```

## Docker Build Fix - 2025-11-10

### Issue Resolved
- **Error**: `invalid file request node_modules/.bin/baseline-browser-mapping`
- **Cause**: Missing .dockerignore files caused Docker to include node_modules symlinks in build context
- **Solution**: Created .dockerignore files for backend and frontend directories

### Files Added
- `backend/.dockerignore` - Excludes node_modules and build artifacts
- `frontend/.dockerignore` - Excludes node_modules, .next, and build artifacts

### Verification
```bash
docker compose build
# Successfully builds both services
```

## Docker Compose Deployment

### Container Build
```bash
docker compose build
```

**Console Output:**
```
[+] Building 88.5s (21/21) FINISHED
 => [backend] exporting to image  9.4s
 => [frontend] exporting to image  33.9s
✔ supply-chain-optimization-platform-backend   Built
✔ supply-chain-optimization-platform-frontend  Built
```

### Start Containers
```bash
docker compose up -d
```

**Console Output:**
```
✔ Network supply-chain-optimization-platform_app-network   Created
✔ Container supply-chain-optimization-platform-backend-1   Started
✔ Container supply-chain-optimization-platform-frontend-1  Started
```

### Verify Status
```bash
docker compose ps
```

**Console Output:**
```
NAME                                            IMAGE                                         STATUS              PORTS
supply-chain-optimization-platform-backend-1    supply-chain-optimization-platform-backend    Up About a minute   0.0.0.0:3000->3000/tcp
supply-chain-optimization-platform-frontend-1   supply-chain-optimization-platform-frontend   Up About a minute   0.0.0.0:3001->3000/tcp
```

### Testing Results

**Backend Health Check:**
```bash
curl http://localhost:3000/health
```
**Output:** `{"status":"healthy","timestamp":"2025-11-10T17:52:28.808Z","service":"supply-chain-backend"}`

**Route Optimizer Test:**
```bash
curl -X POST http://localhost:3000/api/v1/routes/optimize \
  -H "Content-Type: application/json" \
  -d '{"destinations": ["NYC", "LA"], "constraints": {"maxTime": 48}}'
```
**Output:** `{"status":"success","agent":"RouteOptimizerAgent"...,"estimatedTime":"6.0 hours","estimatedDistance":"300 miles"}`

**Frontend Accessibility:**
```bash
curl http://localhost:3001 | grep -q "Supply Chain" && echo "Frontend container accessible"
```
**Output:** `Frontend container accessible`

### Docker Commands
```bash
# View logs
docker compose logs -f backend
docker compose logs -f frontend

# Stop containers
docker compose down

# Rebuild and restart
docker compose up -d --build
```

### Verified ✅
- Backend container running on port 3000
- Frontend container running on port 3001
- Multi-agent system operational in Docker
- Network communication functional

### Complete Docker Testing

**All Agents Verified in Docker:**

1. **RiskAssessmentAgent Test:**
```bash
curl "http://localhost:3000/api/v1/risks/assess?regions=US&checkTypes=weather"
```
**Result:** ✅ `{"status":"success","riskLevel":"low","score":0.25}`

2. **InventoryAgent Test:**
```bash
curl "http://localhost:3000/api/v1/inventory/status?items=item1,item2&timeframe=30"
```
**Result:** ✅ `{"status":"success","stockLevel":"adequate","predictions":[...]}`

3. **CoordinatorAgent Test (Multi-Agent Orchestration):**
```bash
curl -X POST http://localhost:3000/api/v1/agents/coordinate \
  -H "Content-Type: application/json" \
  -d '{"task": "optimize_supply_chain", "params": {"destinations": ["NYC"], "regions": ["US"], "items": ["item1"]}}'
```
**Result:** ✅ Successfully orchestrated all 3 agents: riskAssessment → routeOptimizer → inventory

### Docker Deployment Status: COMPLETE ✅
- Backend container: Fully operational
- Frontend container: Accessible and functional
- All 4 AI agents working
- Multi-agent coordination functional
- Network communication verified

## Frontend-Backend Communication Fix - 2025-11-10

### Issue Resolved
- **Problem**: Frontend showed "No data available" despite backend working
- **Root Cause**: CORS blocking - backend only allowed http://localhost:3000 but frontend runs on port 3001
- **Solution**: Added CORS_ORIGIN environment variable to docker-compose.yml

### Configuration Change
```yaml
backend:
  environment:
    - CORS_ORIGIN=http://localhost:3001
```

### Verification
- All dashboard sections now load data:
  - Route Optimization: Shows optimized routes
  - Risk Alerts: Displays risk assessment
  - Inventory Status: Shows stock levels

## Railway Deployment

**Deployment Status:** ✅ Successfully deployed
**URL:** https://supply-chain-optimizati-platform-production.up.railway.app
**Service:** Backend API (Node.js)
**Port:** 8080
**Date:** 2025-11-10 12:12

### Deployment Configuration
- Uses root Dockerfile copying from backend/
- Railway project: Supply-Chain-Optimizati-Platform
- Environment: production


### API Endpoints
- Root: Returns 404 (expected - no root handler)
- Health: /health
- API Base: /api/v1
- Routes: /api/v1/routes
- Risks: /api/v1/risks
- Inventory: /api/v1/inventory
- Agents: /api/v1/agents

### Environment Variables Set
- PORT=8080
- NODE_ENV=production


## Troubleshooting Log - Frontend-Backend API Connection Issue (Nov 10, 2025)

### Problem Identified
- Frontend loaded but showed "No data available" for Route Optimization, Risk Alerts, and Inventory Status
- Root cause: Syntax errors in `frontend/src/services/api.js` - incorrect axios method calls with misplaced backticks

### Solution Applied
Fixed `frontend/src/services/api.js`:
- Corrected axios syntax from `axios.post\`url\`` to `axios.post(url)`
- Changed default API URL from port 3000 to 8080 to match backend
- Fixed template literal syntax for proper string interpolation

### Files Modified
- `frontend/src/services/api.js` - Fixed axios API calls syntax

### Next Steps
- Rebuild frontend with corrected API configuration
- Copy new build to backend/public directory
- Deploy to Railway

### Deployment Status
- Backend deployed successfully to Railway (port 8080)
- API endpoints verified working:
  - POST /api/v1/routes/optimize - Returns optimized routes successfully
- Frontend rebuilt with fixed API calls and deployed

### Commands Used
```bash
# Fixed api.js syntax errors
# Rebuilt frontend: npm run build
# Copied build to backend: cp -r frontend/build/* backend/public/
# Deployed to Railway: railway up
# Verified API: curl -s https://supply-chain-optimizati-platform.thanhphongle.net/api/v1/routes/optimize
```
