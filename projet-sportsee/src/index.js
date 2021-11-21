import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals';

/**
 * Render the user's page on the HTML code
 * 
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
