import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.min.css';
import '../node_modules/animsition/dist/css/animsition.min.css';
import '../node_modules/fontawesome-4.7/css/font-awesome.min.css';
import '../node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css'

import './index.css';
import './assets/css/main.css'
import './assets/css/util.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
