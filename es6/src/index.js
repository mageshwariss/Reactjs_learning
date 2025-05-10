import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { addition } from './Arrow';
import {additionwithpara} from './Arrowwithpara';
import Demo from './Es6file';

// Render arrow function without parameters
const root = ReactDOM.createRoot(document.getElementById('arrow'));
root.render(<React.StrictMode>{addition()}</React.StrictMode>);

// Render arrow function with parameters
const rootone = ReactDOM.createRoot(document.getElementById('arrowwithpara'));
rootone.render(<React.StrictMode>{additionwithpara(5)}</React.StrictMode>);

// Instantiate the ES6 class and call its methods
const mydemo = new Demo();

// Render class method: addition
const es6add = ReactDOM.createRoot(document.getElementById('es6add'));
es6add.render(<React.StrictMode>{mydemo.addition()}</React.StrictMode>);

// Render class method: subtraction
const es6sub = ReactDOM.createRoot(document.getElementById('es6sub'));
es6sub.render(<React.StrictMode>{mydemo.subtraction()}</React.StrictMode>);

// Web Vitals (optional performance logging)
reportWebVitals();
