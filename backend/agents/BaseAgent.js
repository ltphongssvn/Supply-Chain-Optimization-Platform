// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/agents/BaseAgent.js

const config = require('../config');

/**
 * BaseAgent - Core implementation of Agentic Problem-Solving Process
 * Following Level 2-3 architecture from AI Agents specification
 */
class BaseAgent {
  constructor(name, tools = []) {
    this.name = name;
    this.tools = tools;
    this.memory = []; // Short-term memory (session history)
    this.maxRetries = config.agents.maxRetries;
    this.timeout = config.agents.timeoutMs;
  }

  /**
   * Step 1: Get the Mission (Goal or Trigger)
   */
  async receiveMission(mission) {
    this.mission = mission;
    this.addToMemory('mission', mission);
    return mission;
  }

  /**
   * Step 2: Scan the Scene (Gather context/resources)
   */
  async gatherContext() {
    const context = {
      mission: this.mission,
      availableTools: this.tools.map(t => t.name),
      timestamp: new Date().toISOString()
    };
    this.addToMemory('context', context);
    return context;
  }

  /**
   * Step 3: Think It Through (Devise plan, chain of reasoning)
   */
  async thinkAndPlan(context) {
    throw new Error('thinkAndPlan must be implemented by subclass');
  }

  /**
   * Step 4: Take Action (Execute concrete step)
   */
  async executeAction(action) {
    throw new Error('executeAction must be implemented by subclass');
  }

  /**
   * Step 5: Observe and Iterate (Add outcome to context)
   */
  async observeOutcome(outcome) {
    this.addToMemory('outcome', outcome);
    return outcome;
  }

  /**
   * Main execution loop: Think-Act-Observe cycle
   */
  async execute(mission) {
    try {
      await this.receiveMission(mission);
      const context = await this.gatherContext();
      const plan = await this.thinkAndPlan(context);
      const action = await this.executeAction(plan);
      const outcome = await this.observeOutcome(action);
      
      return {
        status: 'success',
        agent: this.name,
        mission,
        outcome
      };
    } catch (error) {
      return {
        status: 'error',
        agent: this.name,
        mission,
        error: error.message
      };
    }
  }

  addToMemory(type, data) {
    this.memory.push({
      type,
      data,
      timestamp: new Date().toISOString()
    });
  }

  getMemory() {
    return this.memory;
  }

  clearMemory() {
    this.memory = [];
  }
}

module.exports = BaseAgent;
