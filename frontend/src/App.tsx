import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { apiService } from './services/api';

function App() {
  const [apiStatus, setApiStatus] = useState<string>('Checking...');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Test API connection
    const checkApi = async () => {
      try {
        const response = await apiService.healthCheck();
        setApiStatus(`API Connected - ${response.status}`);
        setError('');
      } catch (err) {
        setApiStatus('API Disconnected');
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };

    checkApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Thetawise App</h1>
        <p>
          Welcome to your MERN stack application!
        </p>
        <div style={{ margin: '20px 0', fontSize: '16px' }}>
          <p><strong>API Status:</strong> {apiStatus}</p>
          {error && <p style={{ color: '#ff6b6b' }}><strong>Error:</strong> {error}</p>}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:5000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Backend API
        </a>
      </header>
    </div>
  );
}

export default App;
