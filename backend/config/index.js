// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/config/index.js

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // External API Keys
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  weatherApiKey: process.env.WEATHER_API_KEY,
  
  // Agent Configuration
  agents: {
    maxRetries: parseInt(process.env.MAX_RETRIES) || 3,
    timeoutMs: parseInt(process.env.TIMEOUT_MS) || 30000
  },
  
  // CORS Configuration
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
  }
};
