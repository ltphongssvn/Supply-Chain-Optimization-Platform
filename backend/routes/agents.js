// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/routes/agents.js

const express = require('express');
const router = express.Router();
const CoordinatorAgent = require('../agents/CoordinatorAgent');

const coordinator = new CoordinatorAgent();

router.post('/coordinate', async (req, res) => {
  try {
    const { task, params } = req.body;
    
    const result = await coordinator.execute({ task, params });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
