import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Learnreactpropschild from './ParentToChild';
import Learnreactprops from './MultipleProps';
import Learnreactsingleprops from './SingleProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Learnreactpropschild />
    <Learnreactprops topic="React JS" language="Tamil"/>
    <Learnreactsingleprops topic="React JS" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
