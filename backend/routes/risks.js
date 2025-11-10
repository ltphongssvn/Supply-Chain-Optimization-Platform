// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/routes/risks.js

const express = require('express');
const router = express.Router();
const RiskAssessmentAgent = require('../agents/RiskAssessmentAgent');

const riskAgent = new RiskAssessmentAgent();

router.get('/assess', async (req, res) => {
  try {
    const { regions, checkTypes } = req.query;
    
    const result = await riskAgent.execute({
      regions: regions ? regions.split(',') : [],
      checkTypes: checkTypes ? checkTypes.split(',') : ['weather', 'geopolitical']
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
