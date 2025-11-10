// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/agents/InventoryAgent.js

const BaseAgent = require('./BaseAgent');

/**
 * InventoryAgent - Predicts stock-outs using historical data
 * Level 2: Strategic Problem-Solver with predictive analytics
 */
class InventoryAgent extends BaseAgent {
  constructor() {
    super('InventoryAgent', [
      { name: 'Database', type: 'data' },
      { name: 'PredictiveModel', type: 'analytics' }
    ]);
  }

  /**
   * Step 3: Think and Plan - Analyze inventory requirements
   */
  async thinkAndPlan(context) {
    const { mission } = context;
    const { items = [], timeframe = 30 } = mission;

    const plan = {
      strategy: 'predict_stockouts',
      items,
      timeframe,
      steps: [
        'fetch_historical_data',
        'analyze_trends',
        'predict_demand',
        'identify_risks'
      ],
      thresholds: {
        critical: 0.1,
        low: 0.2,
        adequate: 0.5
      }
    };

    this.addToMemory('plan', plan);
    return plan;
  }

  /**
   * Step 4: Execute Action - Analyze inventory and predict stock-outs
   */
  async executeAction(plan) {
    try {
      const historicalData = await this.fetchHistoricalData(plan.items);
      const predictions = await this.predictDemand(historicalData, plan.timeframe);
      const stockoutRisks = this.identifyStockoutRisks(predictions);
      
      return {
        success: true,
        stockLevel: this.calculateOverallStockLevel(predictions),
        predictions,
        risks: stockoutRisks,
        recommendations: this.generateRecommendations(stockoutRisks)
      };
    } catch (error) {
      throw new Error(`Inventory analysis failed: ${error.message}`);
    }
  }

  async fetchHistoricalData(items) {
    // TODO: Replace with actual database query
    return items.map(item => ({
      item,
      avgDailyConsumption: 10,
      currentStock: 250,
      leadTime: 7
    }));
  }

  async predictDemand(historicalData, timeframe) {
    return historicalData.map(data => {
      const projectedConsumption = data.avgDailyConsumption * timeframe;
      const stockRatio = data.currentStock / projectedConsumption;
      
      return {
        ...data,
        projectedConsumption,
        stockRatio,
        daysUntilStockout: data.currentStock / data.avgDailyConsumption
      };
    });
  }

  identifyStockoutRisks(predictions) {
    return predictions
      .filter(p => p.daysUntilStockout < 14)
      .map(p => ({
        item: p.item,
        severity: p.daysUntilStockout < 7 ? 'critical' : 'warning',
        daysRemaining: p.daysUntilStockout
      }));
  }

  calculateOverallStockLevel(predictions) {
    const avgRatio = predictions.reduce((sum, p) => sum + p.stockRatio, 0) / predictions.length;
    
    if (avgRatio < 0.3) return 'critical';
    if (avgRatio < 0.5) return 'low';
    if (avgRatio < 1) return 'adequate';
    return 'healthy';
  }

  generateRecommendations(risks) {
    if (risks.length === 0) return ['Inventory levels adequate'];
    
    return risks.map(risk => 
      `Reorder ${risk.item} immediately - ${risk.daysRemaining.toFixed(0)} days remaining`
    );
  }
}

module.exports = InventoryAgent;
