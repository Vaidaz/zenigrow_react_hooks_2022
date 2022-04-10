import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import Fibonacci from './Fibonacci';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Fibonacci />
  </React.StrictMode>
);
