// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/routes/index.js

const express = require('express');
const router = express.Router();

// Import route modules
const routesRouter = require('./routes');
const risksRouter = require('./risks');
const inventoryRouter = require('./inventory');
const agentsRouter = require('./agents');

// Mount routes
router.use('/routes', routesRouter);
router.use('/risks', risksRouter);
router.use('/inventory', inventoryRouter);
router.use('/agents', agentsRouter);

module.exports = router;
