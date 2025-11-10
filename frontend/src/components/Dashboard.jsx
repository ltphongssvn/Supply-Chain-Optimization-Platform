// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/frontend/src/components/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import RouteVisualization from './RouteVisualization';
import RiskAlerts from './RiskAlerts';
import InventoryStatus from './InventoryStatus';
import api from '../services/api';
import '../styles/Dashboard.css';

function Dashboard() {
  const [routeData, setRouteData] = useState(null);
  const [riskData, setRiskData] = useState(null);
  const [inventoryData, setInventoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [routes, risks, inventory] = await Promise.all([
        api.getRoutes(),
        api.getRisks(),
        api.getInventory()
      ]);
      setRouteData(routes);
      setRiskData(risks);
      setInventoryData(inventory);
    } catch (error) {
      console.error('Dashboard data fetch failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Route Optimization</h2>
          <RouteVisualization data={routeData} />
        </div>
        <div className="dashboard-card">
          <h2>Risk Alerts</h2>
          <RiskAlerts data={riskData} />
        </div>
        <div className="dashboard-card">
          <h2>Inventory Status</h2>
          <InventoryStatus data={inventoryData} />
        </div>
      </div>
      <button onClick={fetchDashboardData} className="refresh-btn">
        Refresh Data
      </button>
    </div>
  );
}

export default Dashboard;
