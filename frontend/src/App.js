// ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/frontend/src/App.js

import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Supply Chain Optimization Platform</h1>
        <p>Multi-Agent System Dashboard</p>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
