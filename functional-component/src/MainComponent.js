import React, { useState } from 'react';
//simple example of a MainComponent in ReactJS that demonstrates common patterns like props, state, and JSX rendering.
// Child component (optional, for demonstration)
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Main component
function MainComponent() {
  const [name, setName] = useState('World');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Welcome to MainComponent</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <Greeting name={name} />
    </div>
  );
}

export default MainComponent;