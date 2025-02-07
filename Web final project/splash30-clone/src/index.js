import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the updated import for React 18
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
