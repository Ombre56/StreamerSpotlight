import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StreamerDetails from './pages/StreamerDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" Component={App} />
        <Route path='streamer/:streamerId' Component={StreamerDetails} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();