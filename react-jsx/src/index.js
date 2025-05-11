import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'

const mystyle = {
  color: 'blue',
  textAlign:'center'
};

const myele = (
  <div style={mystyle}>
    <h1>Welcome {5+5}</h1>
    <h2 className='header2'>Hello World</h2>
  </div>
);

// ✅ createRoot and render
const container = document.getElementById('root');
const root = createRoot(container);
root.render(myele);