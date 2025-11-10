// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/frontend/src/services/api.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const api = {
  getRoutes: async () => {
    const response = await axios.post(`${API_URL}/api/v1/routes/optimize`, {
      destinations: ['NYC', 'LA', 'Chicago'],
      constraints: { maxTime: 48 }
    });
    return response.data;
  },

  getRisks: async () => {
    const response = await axios.get(`${API_URL}/api/v1/risks/assess`, {
      params: { regions: 'US,EU', checkTypes: 'weather,geopolitical' }
    });
    return response.data;
  },

  getInventory: async () => {
    const response = await axios.get(`${API_URL}/api/v1/inventory/status`, {
      params: { items: 'item1,item2,item3', timeframe: 30 }
    });
    return response.data;
  }
};

export default api;
