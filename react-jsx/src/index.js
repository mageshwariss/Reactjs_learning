import React from 'react';
import { createRoot } from 'react-dom/client';

const mystyle = {
  color: 'blue',
  textAlign:'center'
};

const myele = (
  <div style={mystyle}>
    <h1>Welcome</h1>
    <h2>Hello World</h2>
  </div>
);

// ✅ createRoot and render
const container = document.getElementById('root');
const root = createRoot(container);
root.render(myele);