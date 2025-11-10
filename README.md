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
