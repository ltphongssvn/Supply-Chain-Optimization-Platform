// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/frontend/src/components/RiskAlerts.jsx

import React from 'react';

function RiskAlerts({ data }) {
  if (!data) {
    return <div>No risk data available</div>;
  }

  const { outcome } = data;
  const riskLevelClass = outcome?.riskLevel || 'low';

  return (
    <div className="risk-alerts">
      {outcome && (
        <>
          <div className={`risk-level risk-${riskLevelClass}`}>
            <h3>Risk Level: {outcome.riskLevel.toUpperCase()}</h3>
            <p>Score: {(outcome.score * 100).toFixed(0)}%</p>
          </div>
          <div className="risk-factors">
            <h4>Factors:</h4>
            <ul>
              <li>Weather: {outcome.factors.weather.conditions}</li>
              <li>Geopolitical: {outcome.factors.geopolitical.status}</li>
            </ul>
          </div>
          <div className="recommendations">
            <h4>Recommendations:</h4>
            <ul>
              {outcome.recommendations.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default RiskAlerts;
