// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/agents/CoordinatorAgent.js

const BaseAgent = require('./BaseAgent');
const RouteOptimizerAgent = require('./RouteOptimizerAgent');
const RiskAssessmentAgent = require('./RiskAssessmentAgent');
const InventoryAgent = require('./InventoryAgent');

/**
 * CoordinatorAgent - Level 3 Collaborative Multi-Agent System
 * Orchestrates specialist agents using MCP protocol
 */
class CoordinatorAgent extends BaseAgent {
  constructor() {
    super('CoordinatorAgent', []);
    this.agents = {
      routeOptimizer: new RouteOptimizerAgent(),
      riskAssessment: new RiskAssessmentAgent(),
      inventory: new InventoryAgent()
    };
  }

  async thinkAndPlan(context) {
    const { mission } = context;
    const { task, params } = mission;

    const plan = {
      strategy: 'coordinate_agents',
      task,
      agentSequence: this.determineAgentSequence(task),
      params
    };

    this.addToMemory('plan', plan);
    return plan;
  }

  determineAgentSequence(task) {
    const sequences = {
      optimize_supply_chain: ['riskAssessment', 'routeOptimizer', 'inventory'],
      assess_risks_only: ['riskAssessment'],
      optimize_routes_only: ['routeOptimizer'],
      check_inventory_only: ['inventory']
    };
    return sequences[task] || ['riskAssessment', 'routeOptimizer', 'inventory'];
  }

  async executeAction(plan) {
    const results = {};
    
    for (const agentKey of plan.agentSequence) {
      const agent = this.agents[agentKey];
      const agentMission = this.createAgentMission(agentKey, plan.params, results);
      
      try {
        const result = await agent.execute(agentMission);
        results[agentKey] = result;
        
        this.addToMemory('agent_result', {
          agent: agentKey,
          result
        });
      } catch (error) {
        results[agentKey] = { status: 'error', error: error.message };
      }
    }

    return {
      success: true,
      coordination: {
        task: plan.task,
        agentsInvolved: plan.agentSequence,
        results
      }
    };
  }

  createAgentMission(agentKey, params, previousResults) {
    const missions = {
      routeOptimizer: {
        destinations: params.destinations || ['NYC', 'LA', 'Chicago'],
        constraints: params.constraints || {}
      },
      riskAssessment: {
        regions: params.regions || [],
        checkTypes: params.checkTypes || ['weather', 'geopolitical']
      },
      inventory: {
        items: params.items || [],
        timeframe: params.timeframe || 30
      }
    };
    return missions[agentKey];
  }
}

module.exports = CoordinatorAgent;
