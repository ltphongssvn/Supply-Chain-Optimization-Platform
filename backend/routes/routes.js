// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/routes/routes.js

const express = require('express');
const router = express.Router();
const RouteOptimizerAgent = require('../agents/RouteOptimizerAgent');

const routeAgent = new RouteOptimizerAgent();

router.post('/optimize', async (req, res) => {
  try {
    const { destinations, constraints } = req.body;
    
    const result = await routeAgent.execute({
      destinations,
      constraints
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
