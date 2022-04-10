import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import Todo from './Todo';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
