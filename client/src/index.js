import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';  // Aplicación principal
import Blog from './Blog';  // Aplicación del blog

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/blog/*" element={<Blog />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
