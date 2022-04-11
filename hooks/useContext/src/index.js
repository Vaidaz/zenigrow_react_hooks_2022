import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App2';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
