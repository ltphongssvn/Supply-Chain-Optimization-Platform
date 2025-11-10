// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/frontend/src/components/InventoryStatus.jsx

import React from 'react';

function InventoryStatus({ data }) {
  if (!data) {
    return <div>No inventory data available</div>;
  }

  const { outcome } = data;
  const stockLevelClass = outcome?.stockLevel || 'adequate';

  return (
    <div className="inventory-status">
      {outcome && (
        <>
          <div className={`stock-level stock-${stockLevelClass}`}>
            <h3>Stock Level: {outcome.stockLevel.toUpperCase()}</h3>
          </div>
          {outcome.risks && outcome.risks.length > 0 && (
            <div className="stock-risks">
              <h4>Stock-out Risks:</h4>
              <ul>
                {outcome.risks.map((risk, idx) => (
                  <li key={idx} className={`severity-${risk.severity}`}>
                    <strong>{risk.item}</strong>: {risk.daysRemaining.toFixed(0)} days remaining
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="recommendations">
            <h4>Actions:</h4>
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

export default InventoryStatus;
