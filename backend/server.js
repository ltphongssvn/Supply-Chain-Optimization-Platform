// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const config = require('./config');
const apiRoutes = require('./routes');
const app = express();
// Middleware
app.use(cors(config.cors));
app.use(express.json());
// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Supply Chain Optimization Platform API',
    version: '1.0.0',
    health: '/health',
    api: '/api/v1'
  });
});
// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'supply-chain-backend'
  });
});
// API Routes
app.get('/api/v1', (req, res) => {
  res.json({
    message: 'Supply Chain Optimization Platform API',
    version: '1.0.0',
    endpoints: {
      routes: '/api/v1/routes',
      risks: '/api/v1/risks',
      inventory: '/api/v1/inventory',
      agents: '/api/v1/agents'
    }
  });
});
// Mount API routes
app.use('/api/v1', apiRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});
// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    path: req.path
  });
});
// Start server
app.listen(config.port, () => {
  console.log(`Supply Chain Backend running on port ${config.port}`);
  console.log(`Environment: ${config.nodeEnv}`);
});
module.exports = app;
