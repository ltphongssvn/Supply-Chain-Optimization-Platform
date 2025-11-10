// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/frontend/src/components/RouteVisualization.jsx

import React from 'react';

function RouteVisualization({ data }) {
  if (!data) {
    return <div>No route data available</div>;
  }

  const { outcome } = data;

  return (
    <div className="route-visualization">
      {outcome && outcome.route && (
        <>
          <div className="route-info">
            <p><strong>Distance:</strong> {outcome.estimatedDistance}</p>
            <p><strong>Time:</strong> {outcome.estimatedTime}</p>
            <p><strong>Waypoints:</strong> {outcome.route.waypoints.length}</p>
          </div>
          <div className="waypoints-list">
            <h3>Optimized Route:</h3>
            <ol>
              {outcome.route.optimizedSequence.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ol>
          </div>
        </>
      )}
    </div>
  );
}

export default RouteVisualization;
