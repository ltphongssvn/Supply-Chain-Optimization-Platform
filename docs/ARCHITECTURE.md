# ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/docs/ARCHITECTURE.md

# System Architecture

## Multi-Agent System Design (Level 3-4)

### Agent Taxonomy
Based on "Introduction to AI Agents and Architectures"

**Level 3: Collaborative Multi-Agent System**
- Coordinator agent orchestrates specialist agents
- Agents communicate via MCP protocol
- Each agent has specific domain expertise

**Level 4: Self-Evolving Capabilities**
- Identifies capability gaps through meta-reasoning
- Dynamically creates monitoring agents for emerging risks

## Core Components

### 1. Model (The Brain)
- Foundation models for reasoning
- Metrics-driven model selection
- Model routing for specialist tasks

### 2. Tools (The Hands)
- Google Maps API (route optimization)
- Weather services (risk assessment)
- Customs databases
- ERP webhooks

### 3. Orchestration Layer (Nervous System)
- Manages Think-Act-Observe cycle
- Context engineering and memory
- Chain-of-Thought reasoning

### 4. Deployment (Body)
- Google Cloud Run hosting
- OpenTelemetry tracing
- Scalable, secure infrastructure

## Agent Implementations

### Route Optimizer Agent
- Input: Delivery destinations, constraints
- Processing: Optimization algorithms + Google Maps
- Output: Optimal route plans

### Risk Assessment Agent
- Input: Weather data, geopolitical feeds
- Processing: Pattern recognition, threat analysis
- Output: Risk alerts and mitigation recommendations

### Inventory Agent
- Input: Historical stock data, demand forecasts
- Processing: Predictive analytics
- Output: Stock-out predictions, reorder suggestions

### Coordinator Agent (Level 3)
- Delegates tasks to specialist agents
- Aggregates results
- Makes final decisions
- Creates new agents when gaps identified (Level 4)

## Communication Flow
```
User Request → Coordinator Agent
    ↓
    ├─→ Route Optimizer Agent → Google Maps API
    ├─→ Risk Assessment Agent → Weather/News APIs
    └─→ Inventory Agent → Database
    ↓
Coordinator aggregates results
    ↓
Response to User (via React Frontend)
```

## Technology Stack

### Backend
- Node.js + Express
- Agent orchestration framework
- RESTful APIs for frontend communication

### Frontend
- React for interactive UI
- Real-time dashboard updates
- Exception management interface

### Infrastructure
- Google Cloud Run (deployment)
- OpenTelemetry (monitoring)
- Environment-based configuration
