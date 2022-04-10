import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import Time from './Time';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Time />
  </React.StrictMode>
);
