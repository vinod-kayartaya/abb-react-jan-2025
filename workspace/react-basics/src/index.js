import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// DOM has a element with 'root' id
// The followig is a react variable representing the the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
