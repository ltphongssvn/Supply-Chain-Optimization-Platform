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
