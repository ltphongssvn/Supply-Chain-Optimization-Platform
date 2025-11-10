// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/routes/inventory.js

const express = require('express');
const router = express.Router();
const InventoryAgent = require('../agents/InventoryAgent');

const inventoryAgent = new InventoryAgent();

router.get('/status', async (req, res) => {
  try {
    const { items, timeframe } = req.query;
    
    const result = await inventoryAgent.execute({
      items: items ? items.split(',') : [],
      timeframe: timeframe ? parseInt(timeframe) : 30
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
